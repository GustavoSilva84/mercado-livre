
import { useEffect, useState } from 'react';
import CardHeader from '../../../container/cards/header';
import styles from './styles.module.css';
import { axiosConfing } from '../../../config/axios';

interface IProps {
    id: number;
    name: string;
    sku: string;

    allocatedStock: number;
    stock: number;

}

export default function StockVariationLayout({  id, name, sku, allocatedStock, stock }: IProps) {
    const dataInit = { allocatedStock, stock };
    const [data, setData] = useState(dataInit);

    function allocatedStockAdd() {
        if(data.stock <= 0) return;
        setData({ ...data, allocatedStock: data.allocatedStock + 1,  stock: data.stock - 1 });
    }

    function allocatedStockRemove() {
        if(data.allocatedStock <= 0) return;
        setData({ ...data, allocatedStock: data.allocatedStock - 1 });
    }

    function stockAdd() {
        setData({ ...data, stock: data.stock + 1 });
    }

    function stockRemove() {
        if(data.stock <= 0) return;
        setData({ ...data, stock: data.stock - 1 });
    }

    async function saveChanges() {
        try {
            await axiosConfing.patch(`/variation/${id}`, {
                allocatedStock: data.allocatedStock,
                stock: data.stock
            });

            console.log("Salvo com sucesso");
        }catch(err) {
            console.log(err);
        }
    }

    return (    
        <div className={styles.container}>
            <CardHeader name={name} sku={sku} />


            <div id={styles.body}>
                <div className={styles.grup}>
                    <span className={[styles.allocatedStock].join(" ")}>Reservado (vendido): {data.allocatedStock}</span>
                    <button onClick={allocatedStockRemove}> - </button>
                    <button onClick={allocatedStockAdd}> + </button>
                </div>
                
                <div className={styles.grup}>
                    <span>Disponível: {data.stock}</span>
                    <button onClick={stockRemove}> - </button>
                    <button onClick={stockAdd}> + </button>
                </div>
            </div>

            { 
                dataInit.allocatedStock == data.allocatedStock && 
                dataInit.stock == data.stock ? "" : 
                <button id={styles.saveButton} onClick={saveChanges}> Salvar </button> 
            }

        </div>  
    );
}