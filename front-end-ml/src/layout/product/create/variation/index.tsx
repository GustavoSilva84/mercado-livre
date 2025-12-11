



import { GrupInput } from '../../../../component/grupInput';
import { listInputs } from './inputs';
import styles from './styles.module.css';

export default function VariationFormLayout() {
  return (
    <div className={styles.container}>

        {/* {listInputs.map((_data, index) => (
            <GrupInput
                className={_data.id === "sku" ? styles.sku : ""}
                key={index}
                label={_data.label}
                type={_data.type}   
                placeholder={_data.placeholder}
                value={value[_data.id as keyof typeof value]}
                onChange={_value => handleOnChange(_value, _data.id)}
            />
        ))} */}

                    {/* <ul id={styles.listVariation}>
                        {listVariation.map((variation, index) => (
                            <li onClick={() => {
                                if(idVariationSelect === index) {
                                    setIdVariationSelect(null);
                                    return;
                                };

                                setIdVariationSelect(index);
                            }} key={index} className={[styles.variationItem, idVariationSelect === index ? styles.selected : ""].join(" ")}>
                                <span> Nome: {variation.name}</span>
                                <span> SKU: {variation.sku}</span>
                                <span> Estoque alocado: {variation.allocatedStock}</span>
                                <span> Estoque disponível: {variation.stock}</span>
                            </li>
                        ))}
                    </ul> */}



                {/* </form> */}
    </div>
  );
}