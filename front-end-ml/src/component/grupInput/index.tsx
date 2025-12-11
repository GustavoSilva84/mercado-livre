



import syles from './styles.module.css';


interface IProps {
    className?: string;
    value?: string | number;
    type?: string;
    placeholder?: string;
    label?: string;
    onChange?: (value: string) => void;
}

export function GrupInput({ value, type, placeholder, label, onChange, className }: IProps) {
    return (
        <div className={[syles.container, className].join(" ")}>
            <label> {label} </label>

            <input
                value={value}
                onChange={e => onChange && onChange(e.target.value)}
                name={label}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )
}