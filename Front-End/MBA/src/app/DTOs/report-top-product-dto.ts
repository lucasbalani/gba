import { Product } from "../models/product";

export interface ReportTopProductDto{
    product: Product;
    quantitySale: Number;
}