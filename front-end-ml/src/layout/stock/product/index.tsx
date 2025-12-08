
import styles from './styles.module.css';

import { IProductTypes } from '../../../types/product.types';
import StockVariationLayout from '../variation';
import CardHeader from '../../../container/cards/header';

interface IProps {
    children?: React.ReactNode | React.ReactNode[];

    data: IProductTypes;
}

export default function ProductCardLayout({ children, data }: IProps) {
  return (
    <div className={styles.stockCardLayout}>
        <CardHeader name={data.name} sku={data.sku} />

        <div id={styles.variantsContainer}>
            {data.variation.map((variant, index) => (
                <StockVariationLayout
                    key={index}
                    id={variant.id}
                    name={variant.name}
                    sku={variant.sku}
                    allocatedStock={variant.allocatedStock}
                    stock={variant.stock}
                />
            ))}
        </div>
    </div>
  );
}