import { PaymentType } from "../Enums/payment-type";
import { Cashier } from "./cashier";

export interface Sale{
    typePayment: PaymentType;
    totalPrice: Number;
    cashierId: Number;
    cashier: Cashier;
    saleDate: Date;
}