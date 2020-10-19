import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Store} from "@ngrx/store";
import {LoginUser} from "../../store/login-store/login-page.actions";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private httpService: HttpService, private store: Store) {
  }


  /**
   * Login user
   */
  userName: string;

  /**
   * Password user
   */
  password: string;


  ngOnInit(): void {
  }

  onSubmit() {
    this.store.dispatch(new LoginUser({
      userName: this.userName,
      password: this.password,
      userId: 111
    }))
  }

  isUserName(): boolean {
    return !this.userName;
  }
}
