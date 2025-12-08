import { IProductTypes } from "../types/product.types";

export const ProductData: Array<IProductTypes> = [
    {
        name: "Product A",
        sku: "PRODA",
        id: 1,

        variation: [
            {
                id: 1,
                name: "Variation A1",
                sku: "PRODA-VAR1",

                allocatedStock: 5,
                stock: 20,
            },
            {
                id: 2,
                name: "Variation A2",
                sku: "PRODA-VAR2",

                allocatedStock: 2,
                stock: 15,
            },
        ],
    },
    {   
        id: 2,
        name: "Product A",
        sku: "PRODA",

        variation: [
            {
                id: 3,
                name: "Variation A1",
                sku: "PRODA-VAR1",

                allocatedStock: 5,
                stock: 20,
            },
            {
                id: 4,
                name: "Variation A2",
                sku: "PRODA-VAR2",

                allocatedStock: 2,
                stock: 15,
            },
        ],
    }
];