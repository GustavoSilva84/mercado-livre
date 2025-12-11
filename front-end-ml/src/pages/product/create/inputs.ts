import { IGrupInputTypes } from "../../../types/grupInput.types";




export const inputsProduct: IGrupInputTypes[] = [
    {
        id: "name",
        label: "Nome do produto",
        type: "text",
        placeholder: "Digite o nome do produto"
    },
    {
        id: "sku",
        label: "SKU do produto",
        type: "text",
        placeholder: "Digite o SKU do produto"
    }
] 

export const inputsVariation: IGrupInputTypes[] = [
    {
        id: "name",
        label: "Nome da variação",
        type: "text",
        placeholder: "Digite o nome da variação"
    },

    {
        id: "allocatedStock",
        label: "Estoque alocado",
        type: "number",
        placeholder: "0"
    },
    {
        id: "stock",
        label: "Estoque disponível",
        type: "number",
        placeholder: "0"
    },
        {
        id: "sku",
        label: "SKU da variação",
        type: "text",
        placeholder: "Digite o SKU da variação"
    },
];  