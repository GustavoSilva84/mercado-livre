










import styles from "./styles.module.css";

interface IProps {
    className?: string;
}

export default function ButtonSave({ className }: IProps) {
    return (
        <button className={[styles.container].join(" ")}>
            Salvar
        </button>
    )
}