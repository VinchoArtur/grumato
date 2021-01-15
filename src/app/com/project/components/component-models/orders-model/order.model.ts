export interface OrderEntry {
  orderCode?: number;
  orderDescription: string;
  customerCode: string;
  dateOfReceiptOfOrder: Date;
  orderExecutionDate: Date;
  productCode: string;
  orderCost: string;
}
