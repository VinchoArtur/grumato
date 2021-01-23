import { Component, OnInit } from '@angular/core';
import {Employees} from '../../component-models/users-model/user.model';
import {CreateUserComponent} from '../../add-data-modal-window/create-user/create-user.component';
import {NbDialogRef} from '@nebular/theme';
import {BaseResponse} from '../../users/users.component';
import {HttpService} from '../../../services/http.service';
import {DataState} from '../../components-state/data.state';
import {Store} from '@ngrx/store';
import {SaveUsers} from '../../components-store/components.action';

@Component({
  selector: 'app-user-cards-window',
  templateUrl: './user-cards-window.component.html',
  styleUrls: ['./user-cards-window.component.css']
})
export class UserCardsWindowComponent implements OnInit {

  user: Employees;
  surname: string;
  name: string;
  patronymic: string;
  phoneNumber: string;
  direction: string;

  constructor(protected ref: NbDialogRef<UserCardsWindowComponent>) { }

  ngOnInit(): void {
  }

  showAvatar() {
  }

  edit() {
    this.ref.close({
     user: this.user
    })
  }

  cancel() {
    this.ref.close(false)
  }

  changeSurname(surname: HTMLInputElement) {
    this.user.surname = surname.value;
  }

  changeName(name: HTMLInputElement) {
    this.user.name = name.value;
  }

  changePatronymic(patronymic: HTMLInputElement) {
    this.user.patronymic = patronymic.value;
  }

  changePhoneNumber(phoneNumber: HTMLInputElement) {
    this.user.phoneNumber = phoneNumber.value;
  }

  changeDirection(direction: HTMLInputElement) {
    this.user.direction = direction.value;
  }
}
