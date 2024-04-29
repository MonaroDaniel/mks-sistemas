export type Products = {
    products: Product[]
}

export type Product = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: string;
    count: number;
};