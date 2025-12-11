





import styles from "./styles.module.css";

interface IProps {
    name: string,
    sku: string,
    allocatedStock: number,
    stock: number,
    select: boolean;

    onClick: () => void;
    className?: string;
}

export default function CardVariationComponent({ name, sku, allocatedStock, stock, onClick, className, select }: IProps) {
    return (
        <div onClick={onClick} className={[styles.container, select && styles.selected, className].join(" ")}>
            <span> Nome: {name}</span>
            <span> SKU: {sku}</span>
            <span> Estoque alocado: {allocatedStock}</span>
            <span> Estoque disponível: {stock}</span>
        </div>
    )
}