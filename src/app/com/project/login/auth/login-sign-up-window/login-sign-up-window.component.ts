import { Component, OnInit } from '@angular/core';
import {NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';

@Component({
  selector: 'app-login-sign-up-window',
  templateUrl: './login-sign-up-window.component.html',
  styleUrls: ['./login-sign-up-window.component.scss']
})
export class LoginSignUpWindowComponent implements OnInit {
  userName: string;
  password: string;
  isName: boolean = false;

  constructor(protected ref: NbDialogRef<LoginSignUpWindowComponent>, private dialogService: NbDialogService, private toastrService: NbToastrService) {
  }

  ngOnInit(): void {

  }

  submit() {
    if (!this.userName) {
      this.isName = true
    }
    if (this.userName && this.password) {
      this.ref.close({name: this.userName, password: this.password});
    } else {
      this.toastrService.danger("Please write Login / Password", "Attention", {duration: 2000})
    }
  }

  cancel() {
    this.ref.close();
  }

}
