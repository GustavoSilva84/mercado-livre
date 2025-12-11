export interface IVariationTypes {
    id: number;

    name: string;
    sku: string;

    allocatedStock: number;
    stock: number;
}




export interface IProductTypes {
    id: number;

    name: string;
    sku: string;

    variation: Array<IVariationTypes>;
}
