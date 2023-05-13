import { PaymentType } from "../Enums/payment-type";

export interface ReportSaleFilterDto{
    typePayment: PaymentType;
    cashierId: Number;
    start: Date;
    end: Date;
}