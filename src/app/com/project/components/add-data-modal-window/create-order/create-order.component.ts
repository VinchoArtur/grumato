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
  orderName: string;
  orderCost: string;


  model: IMyDateModel = null;

  myDpOptions: IAngularMyDpOptions = {
    dateRange: false,
    dateFormat: 'dd.mm.yyyy'
  };


  constructor(protected ref: NbDialogRef<CreateOrderComponent>) {
  }

  ngOnInit() {
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
      orderName: this.orderName,
      orderCost: this.orderCost,
    })
  }

  onDateChanged(event: IMyDateModel): void {
    this.dateOfReceiptOfOrder = event.singleDate.jsDate;
    this.orderExecutionDate = event.singleDate.jsDate;
  }
}
