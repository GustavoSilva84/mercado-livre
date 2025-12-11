


import { useState } from 'react';
import styles from './styles.module.css';

interface IProps {
    onSearch: (value: string) => void;
    className?: string;
}

export function SearchComponent({ onSearch, className }: IProps) {
    let [inputValue, setInputValue] = useState("");

    return (
        <div className={[styles.container, className].join(" ")}> 
            <input 
                onChange={(e) => setInputValue(e.currentTarget.value)} 
                type="text"
                placeholder="Buscar produto por nome. Ex: Montreal..."
            />

            <button 
                disabled={inputValue.trim().length === 0}
                onClick={() => onSearch(inputValue)}
            >buscar</button>
        </div>
    );
}