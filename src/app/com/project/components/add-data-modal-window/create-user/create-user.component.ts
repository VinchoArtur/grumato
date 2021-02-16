import { Component, OnInit } from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {Employees} from '../../component-models/users-model/user.model';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  user: Employees;
  surname:string;
  name: string;
  patronymic: string;
  phoneNumber: string;
  direction: string;
  role: string;

  constructor(protected ref: NbDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {
    if (this.user) {
      this.surname = this.user.surname;
      this.name = this.user.name;
      this.patronymic = this.user.patronymic;
      this.phoneNumber = this.user.phoneNumber;
      this.direction = this.user.direction;
      this.role = 'нима нихалеры';
    } else {
      this.surname = '';
      this.name = '';
      this.patronymic = '';
      this.phoneNumber = '';
      this.direction = '';
      this.role = '';
    }

  }
  cancel() {
    this.ref.close(false)
  }

  submit() {
    this.ref.close({
      surname: this.surname,
      name: this.name,
      patronymic: this.patronymic,
      phoneNumber: this.phoneNumber,
      direction: this.direction,
      role: this.role
    })
  }
}
