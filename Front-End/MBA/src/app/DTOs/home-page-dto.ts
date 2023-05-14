import { SaleGraphicDto } from "./sale-graphic-dto";

export interface HomePageDto{
    saleQuantity: number;
    productQuantity: number;
    totalPrice: number;
    topProductNameSale: string;
    salesGraphicDto: SaleGraphicDto[]
}