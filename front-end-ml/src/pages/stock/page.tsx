






import { useEffect, useState } from "react";
import Container from "../../container/container";
import ProductCardLayout from "../../layout/stock/product";
import styles from "./styles.module.css";
import { axiosConfing } from "../../config/axios";
import { IProductTypes } from "../../types/product.types";

export default function StockPage() {
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
                <div id={styles.header}>
                    <span>Estoque Mercado Livre</span>

                    {/* há 5 horas */}
                    <span id={styles.lastUpdate}> Última atualização: ----  </span>
                </div>


                {data.map((_data, index) => (
                    <ProductCardLayout key={index} data={_data} />
                ))
                }




            </Container>
        </div>
    )
}