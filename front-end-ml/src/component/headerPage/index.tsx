


import styles from "./styles.module.css";

interface IProps {
    className?: string;

    title: string;
    description?: string;


}

export default function HeaderPageComlponent({ className, title, description }: IProps) {

    

    return (
        <div className={[styles.container, className].join(" ")}>
            <div id={styles.grupText}>
                <h1>{title}</h1>
                {description && <p>{description}</p>}
            </div>
        
            {/* há 5 horas */}
            {/* <span id={styles.lastUpdate}> Última atualização: ----  </span> */}
        </div>
    )
}