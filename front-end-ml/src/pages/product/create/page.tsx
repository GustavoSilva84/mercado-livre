import { useEffect, useState } from "react";
import Container from "../../../component/container";
import HeaderPageComlponent from "../../../component/headerPage";


import styles from "./styles.module.css";
import { IVariationTypes } from "../../../types/product.types";
import { axiosConfing } from "../../../config/axios";
import FormLayout from "../../../layout/form";
import { inputsProduct, inputsVariation } from "./inputs";
import ButtonDefault from "../../../component/buttons/default";
import CardVariationComponent from "../../../component/cards/variation";
import { useNavigate } from "react-router-dom";

export function ProductCreatePage() {
    const navigate = useNavigate();

    const [product, setProduct] = useState<{ name: string; sku: string }>({ name: "", sku: "" });
    const [listVariation, setListVariation] = useState<Omit<IVariationTypes, "id">[]>([]);


    const [idVariationSelect, setIdVariationSelect] = useState<number | null>(null);

    const [variation, setVariation] = useState<Omit<IVariationTypes, "id">>({
        name: "",
        sku: "",
        allocatedStock: 0,
        stock: 0
    });


    function addVariation() {

        if (idVariationSelect != null) {
            listVariation[idVariationSelect] = variation;
            setListVariation([...listVariation]);
        } else {
            setListVariation([...listVariation, variation]);
        }

        if(variation.name.trim().length <= 0 && variation.sku .trim().length <= 0) return;

        setVariation({
            name: "",
            sku: "",
            allocatedStock: 0,
            stock: 0
        });

    }

    async function saveProduct() {
        try {
            if(product.name.trim().length <= 0 && product.sku .trim().length <= 0) return;
    
            await axiosConfing.post("/product", {
                ...product,
                variation: listVariation
            });
    
            navigate("/product/stock")
        }catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (idVariationSelect == null) {
            setVariation({
                name: "",
                sku: "",
                allocatedStock: 0,
                stock: 0
            });

            return;
        };

        const variationSelected = listVariation[idVariationSelect];

        setVariation({
            name: variationSelected.name,
            sku: variationSelected.sku,
            allocatedStock: variationSelected.allocatedStock,
            stock: variationSelected.stock
        });

    }, [idVariationSelect]);

    return (
        <div className={styles.styles}>
            <Container claassName={styles.container}>
                <HeaderPageComlponent
                    title={`Cadatrar novo produto - ${idVariationSelect}`}
                    description="Preencha os campos abaixo para cadastrar um novo produto no sistema."
                />

                <FormLayout
                    title="Produto"
                    onChange={(e) => setProduct(e)}
                    value={product}
                    inputs={inputsProduct}
                />

                <FormLayout
                    className={styles.containerVariation}
                    classNameForm={styles.formVariation}
                    title="Variação"
                    onChange={(e) => setVariation(e)}
                    value={variation}
                    inputs={inputsVariation}

                    childrenContainer={
                        <div id={styles.listVariation}>
                            {listVariation.map((_data, index) => (
                                <CardVariationComponent
                                    onClick={() => {
                                        if (idVariationSelect === index) {
                                            setIdVariationSelect(null);
                                            return;
                                        };

                                        setIdVariationSelect(index);
                                    }}
                                    allocatedStock={_data.allocatedStock}
                                    name={_data.name}
                                    sku={_data.sku}
                                    stock={_data.stock}
                                    select={idVariationSelect === index}
                                />
                            ))}
                        </div>
                    }
                childrenForm={
                    <ButtonDefault
                        text={idVariationSelect != null ? "Atualizar" : "Adicionar"}
                        onClick={addVariation}
                        className={styles.buttonAddVariation}
                    />
                }
                />

                <ButtonDefault
                    text={"Salvar"}
                    onClick={saveProduct}
                    className={styles.buttonSubmit}
                    disabled={product.name.trim().length === 0 || product.sku.trim().length === 0}
                />
            </Container>
        </div>
    )
}