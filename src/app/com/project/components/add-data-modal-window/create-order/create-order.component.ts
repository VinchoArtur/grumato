import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  orderDescription: string;
  customerCode: string;
  dateOfReceiptOfOrder: Date;
  orderExecutionDate: Date;
  productCode: string;
  orderCost: string;
  date: Date = new Date();
  datePickerConfig: any;
  selectedDate: any;
  config: any;

  constructor(protected ref: NbDialogRef<CreateOrderComponent>) { }

  ngOnInit() {
    this.orderDescription = '';
    this.customerCode = '';
    this.dateOfReceiptOfOrder;
    this.orderExecutionDate;
    this.productCode = '';
    this.orderCost = '';
  }

  cancel() {
    this.ref.close(false)
  }

  submit() {
    this.ref.close({
      orderDescription: this.orderDescription,
      customerCode: this.customerCode,
      dateOfReceiptOfOrder: this.dateOfReceiptOfOrder,
      orderExecutionDate: this.orderExecutionDate,
      productCode: this.productCode,
      orderCost: this.orderCost,
    })
  }

  handleDateChange($event: any) {

  }
}
