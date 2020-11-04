import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  name: string;
  Order: string;
  CompanyName: string;
  Pay: string;

  constructor(protected ref: NbDialogRef<CreateCustomerComponent>) { }

  ngOnInit() {
    this.name = '';
    this.Order = '';
    this.CompanyName = '';
    this.Pay = '';
  }

  cancel() {
    this.ref.close(false)
  }

  submit() {
    this.ref.close({
      name: this.name,
      Order: this.Order,
      CompanyName: this.CompanyName,
      Pay: this.Pay,
    })
  }

}
