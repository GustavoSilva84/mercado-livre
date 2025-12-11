
import styles from "./styles.module.css";

interface IProps {
    className?: string;
    text: string;
    
    disabled?: boolean;
    onClick?: () => void;
}

export default function ButtonDefault({ className, text, onClick, disabled }: IProps) {
    return (
        <button onClick={onClick} disabled={disabled} className={[styles.container, className].join(" ")}>
            { text }
        </button>
    )
}