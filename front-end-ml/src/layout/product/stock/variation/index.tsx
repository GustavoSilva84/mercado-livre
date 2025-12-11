
import { useEffect, useState } from 'react';
import CardHeader from '../../../../component/cards/header';
import styles from './styles.module.css';
import { axiosConfing } from '../../../../config/axios';

interface IProps {
    id: number;
    name: string;
    sku: string;

    allocatedStock: number;
    stock: number;

    className?: string;
}

export default function VariationLayout({  id, name, sku, allocatedStock, stock, className }: IProps) {
    const dataInit = { allocatedStock, stock };
    const [data, setData] = useState(dataInit);
    const [isLoad, setIsLoad] = useState(false);

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

    useEffect(() => {
        saveChanges();
    }, [data])

    async function saveChanges() {
        try {
            setIsLoad(true);

            console.log(data)

            await axiosConfing.patch(`/variation/${id}`, {
                allocatedStock: data.allocatedStock,
                stock: data.stock
            });

            setIsLoad(false);

            console.log("Salvo com sucesso");
        }catch(err) {
            console.log(err);
        }
    }

    return (    
        <div className={[styles.container, className].join(" ")}>
            <CardHeader name={name} sku={sku} />


            <div id={styles.body}>
                <div className={styles.grup}>
                    <span className={[styles.allocatedStock].join(" ")}>Reservado (vendido): {data.allocatedStock}</span>
                    <button className={isLoad ? styles.loadButton : ""} disabled={isLoad} onClick={allocatedStockRemove}> - </button>
                    <button className={isLoad ? styles.loadButton : ""} disabled={isLoad} onClick={allocatedStockAdd}> + </button>
                </div>
                
                <div className={styles.grup}>
                    <span>Disponível: {data.stock}</span>
                    <button className={isLoad ? styles.loadButton : ""} disabled={isLoad} onClick={stockRemove}> - </button>
                    <button className={isLoad ? styles.loadButton : ""} disabled={isLoad} onClick={stockAdd}> + </button>
                </div>
            </div>
        </div>  
    );
}