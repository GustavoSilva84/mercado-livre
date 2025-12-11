
import styles from "./styles.module.css";
import { IGrupInputTypes } from "../../types/grupInput.types";
import { IProductTypes } from "../../types/product.types";
import formatSku from "../../utils/formatSku";
import { GrupInput } from "../../component/grupInput";
import { title } from "process";

type IValue = Omit<IProductTypes, "variation" | "id">;

interface IProps {
    inputs: IGrupInputTypes[];
    className?: string;
    classNameForm?: string,
    title?: string;
    onChange: (value: any) => void;
    value: any;
    childrenContainer?: React.ReactNode | React.ReactNode[];
    childrenForm?: React.ReactNode | React.ReactNode[];
}

export default function FormLayout({ 
    className, 
    classNameForm,
    onChange, 
    value, 
    inputs, 
    title, 
    childrenContainer, 
    childrenForm,
}: IProps) {

    function handleOnChange(_data: any, id: string) {
        const newValue = id == "name" ? 
            { ...value, [id]: _data, sku: formatSku(_data) } :  
            { ...value, [id]: _data } 

        onChange(newValue);
    }

    return (
        <div className={[styles.container, className].join(" ")}>
            { title && <h2 className={styles.title}>{title}</h2> }

            <div className={[styles.form, classNameForm].join(" ")}>
                {inputs.map((_data, index) => (
                    <GrupInput
                        className={[
                            _data.id === "sku" && styles.sku,
                            _data.id === "sku" && value.sku !== formatSku(value.name) && styles.skuNotFocus
                        ].join(" ")}
                        key={index}
                        label={_data.label}
                        type={_data.type}   
                        placeholder={_data.placeholder}
                        value={value[_data.id as keyof typeof value]}
                        onChange={(_value: string) => handleOnChange(_data.type == "number" ? parseInt(_value) : _value, _data.id)}
                    />
                ))}

                {childrenForm}
            </div>

            {childrenContainer}
        </div>
    )
}