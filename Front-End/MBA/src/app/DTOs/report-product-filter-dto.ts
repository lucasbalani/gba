import { ProductType } from "../Enums/type-product";

export interface ReportProductFilterDto {
    price: Number;
    expirationDate: Date;
    typeProduct: ProductType
}