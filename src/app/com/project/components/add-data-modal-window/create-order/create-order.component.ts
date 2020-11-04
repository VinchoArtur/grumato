import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  name: string;
  Customer: string;
  Developer: string;
  Time: string;
  Pay: string;

  constructor(protected ref: NbDialogRef<CreateOrderComponent>) { }

  ngOnInit() {
    this.name = '';
    this.Customer = '';
    this.Developer = '';
    this.Time = '';
    this.Pay = '';
  }

  cancel() {
    this.ref.close(false)
  }

  submit() {
    this.ref.close({
      name: this.name,
      Customer: this.Customer,
      Developer: this.Developer,
      Time: this.Time,
      Pay: this.Pay,
    })
  }

}
