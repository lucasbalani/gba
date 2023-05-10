import { PaymentType } from "../Enums/payment-type";

export interface ReportSaleFilterDto{
    paymentType: PaymentType;
    cashierId: Number;
    start: Date;
    end: Date;
}