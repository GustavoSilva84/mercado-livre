






import { useEffect, useState } from "react";
import Container from "../../../component/container";
import ProductCardLayout from "../../../layout/product/stock/product";
import styles from "./styles.module.css";
import { axiosConfing } from "../../../config/axios";
import { IProductTypes } from "../../../types/product.types";
import { SearchComponent } from "../../../component/search";
import HeaderPageComlponent from "../../../component/headerPage";

export default function ProductStockPage() {
    const [data, setData] = useState<Array<IProductTypes>>([]);

    useEffect(() => {
        loadData();
    }, []);

    async function loadData() {
        const response: any = await axiosConfing("/product");

        const newData = response.data.data.map((_data: any): IProductTypes => {
            return {
                id: _data.id,
                name: _data.name,
                sku: _data.sku,
                variation: _data.variation.map((_variant: any) => ({
                    id: _variant.id,
                    name: _variant.name,
                    sku: _variant.sku,
                    allocatedStock: _variant.allocatedStock,
                    stock: _variant.stock,
                }))
            }
        });

        setData(newData);
    }



    return (
        <div className={styles.styles}>
            <Container claassName={styles.container}>
                <HeaderPageComlponent
                    title="Estoque Mercado Livre"
                    description="Última atualização: ----"
                />

                <SearchComponent
                    
                    onSearch={(e) => console.log(e)}
                    className={styles.search}
                />

                {data.map((_data, index) => (
                    <ProductCardLayout 
                        key={index} 
                        data={_data} 
                        className={styles.productCard}
                    />
                ))
                }
            </Container>
        </div>
    )
}