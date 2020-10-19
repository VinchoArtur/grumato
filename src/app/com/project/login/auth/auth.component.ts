import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Store} from "@ngrx/store";
import {LoginPageActions, LoginUser} from "../../store/login-store/login-page.actions";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private httpService: HttpService, private store: Store) {
  }

  users: any;
  tabs: any;

  getUserData() {
    this.httpService.getUserData().subscribe(value => {
      this.users = value;
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(new LoginUser({
      userName: 'admin',
      password: 'admin',
      userId: 111
    }))
  }
}
