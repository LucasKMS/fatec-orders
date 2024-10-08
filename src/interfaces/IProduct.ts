export interface IProduct {
    // A interrogação é para dizer que o ID não é obrigatório
    id?: number;
    description: string;
    brand: string;
    value: number;
    weight: number;
    flavor: string;
}