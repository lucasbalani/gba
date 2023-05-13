import { ProductType } from "../Enums/type-product";

export interface Product {
    name: string;
    price: Number;
    expirationDate: Date;
    typeProduct: ProductType;
}