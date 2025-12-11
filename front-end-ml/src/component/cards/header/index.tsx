

import styles from './styles.module.css';


interface IProps {
    name: string;
    sku: string;

    className?: string;
}

export default function CardHeader({ name, sku, className }: IProps) {
    return (
        <div className={[styles.header, className].join(' ')}>
            <span>Nome: {name} </span>
            <span>SKU: {sku} </span>
        </div>
    );
}