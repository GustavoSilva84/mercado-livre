
import styles from './styles.module.css';

import { IProductTypes } from '../../../../types/product.types';
import CardHeader from '../../../../component/cards/header';
import VariationLayout from '../variation';

interface IProps {
    children?: React.ReactNode | React.ReactNode[];

    data: IProductTypes;

    className?: string;
}

export default function ProductCardLayout({ children, data, className }: IProps) {
  return (
    <div className={[styles.container, className].join(" ")}>
        <CardHeader name={data.name} sku={data.sku} />

        <div id={[styles.variantsContainer].join(" ")}>
            {data.variation.map((variant, index) => (
                <VariationLayout
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