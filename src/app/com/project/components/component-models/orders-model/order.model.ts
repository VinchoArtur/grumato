export interface OrderEntry {
  orderCode?: number;
  orderName?: string;
  orderDescription: string;
  customerCode: string;
  dateOfReceiptOfOrder: Date;
  orderExecutionDate: Date;
  orderCost: string;
}
