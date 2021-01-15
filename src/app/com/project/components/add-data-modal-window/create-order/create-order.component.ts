import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {IAngularMyDpOptions, IMyDateModel} from "angular-mydatepicker";

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
  config: any;


  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
    // other options are here...
  };

  model: IMyDateModel = null;



  constructor(protected ref: NbDialogRef<CreateOrderComponent>) { }

  ngOnInit() {
    this.orderDescription = '';
    this.customerCode = '';
    this.dateOfReceiptOfOrder = new Date();
    this.orderExecutionDate = new Date();
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

  onDateChanged(event: IMyDateModel): void {
    this.dateOfReceiptOfOrder = event.singleDate.jsDate;
    this.orderExecutionDate = event.singleDate.jsDate;
  }

  isDateChange(event) {
    console.log(event.locale());
    console.log( typeof event);
    // this.dateOfReceiptOfOrder = new Date(event)
  }
}
