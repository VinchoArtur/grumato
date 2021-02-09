import {Component, OnInit} from '@angular/core';
import {Employees} from '../../component-models/users-model/user.model';
import {NbDialogRef} from '@nebular/theme';
import {CustomerEntry} from "../../component-models/customers-model/customer.model";
import {OrderEntry} from "../../component-models/orders-model/order.model";

@Component({
  selector: 'app-user-cards-window',
  templateUrl: './user-cards-window.component.html',
  styleUrls: ['./user-cards-window.component.css']
})
export class UserCardsWindowComponent implements OnInit
{

  user: Employees;
  customer: CustomerEntry;
  order: OrderEntry;
  surname: string;
  name: string;
  patronymic: string;
  phoneNumber: string;
  direction: string;

  constructor(protected ref: NbDialogRef<UserCardsWindowComponent>)
  {
  }

  ngOnInit(): void
  {
  }

  showAvatar()
  {
  }

  edit()
  {
    if (this.user) {
      this.ref.close({
        user: this.user
      })
    }
    if (this.customer) {
      this.ref.close({
        customer: this.customer
      })
    }
    if (this.order) {
      this.ref.close({
        order: this.order
      })
    }
  }

  cancel()
  {
    this.ref.close(false)
  }

  changeSurname(surname: HTMLInputElement)
  {
    if (this.user) {
      this.user.surname = surname.value;
    }
    if (this.customer) {
      this.customer.surname = surname.value;
    }
    if (this.order) {

    }
  }

  changeName(name: HTMLInputElement)
  {
    if (this.user)
    {
      this.user.name = name.value;
    }
    if (this.customer)
    {
      this.customer.name = name.value;
    }
    if (this.order)
    {

    }
  }

  changePatronymic(patronymic: HTMLInputElement)
  {
    this.user.patronymic = patronymic.value;
  }

  changePhoneNumber(phoneNumber: HTMLInputElement)
  {
    this.user.phoneNumber = phoneNumber.value;
  }

  changeDirection(direction: HTMLInputElement)
  {
    this.user.direction = direction.value;
  }
}
