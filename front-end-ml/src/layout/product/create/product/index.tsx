import { GrupInput } from "../../../../component/grupInput";
import { IProductTypes } from "../../../../types/product.types";
import { inputs } from "./inputs";
import styles from "./styles.module.css";
import formatSku from "../../../../utils/formatSku";

type IValue = Omit<IProductTypes, "variation" | "id">;

interface IProps {
    className?: string;
    onChange: (value: IValue) => void;
    value: IValue;
}

export default function ProductFormLayout({ className, onChange, value }: IProps) {

    function handleOnChange(_data: any, id: string) {
        const newValue = { ...value, [id]: _data, sku: formatSku(_data) };
        onChange(newValue);
    }

    return (
        <div className={[styles.container, className].join(" ")}>
            {inputs.map((_data, index) => (
                <GrupInput
                    className={_data.id === "sku" ? styles.sku : ""}
                    key={index}
                    label={_data.label}
                    type={_data.type}   
                    placeholder={_data.placeholder}
                    value={value[_data.id as keyof typeof value]}
                    onChange={_value => handleOnChange(_value, _data.id)}
                />
            ))}
        </div>
    )
}