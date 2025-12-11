import { IGrupInputTypes } from "../../../../types/grupInput.types";



export const listInputs: IGrupInputTypes[] = [
    {
        id: "name",
        label: "Nome da variação",
        type: "text",
        placeholder: "Digite o nome da variação"
    },
    {
        id: "sku",
        label: "SKU da variação",
        type: "text",
        placeholder: "Digite o SKU da variação"
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
    }
];  