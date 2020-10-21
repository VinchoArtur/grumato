import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {LoginUser, SignUpUser} from '../../store/login-store/login-page.actions';
import {NbDialogService} from '@nebular/theme';
import {LoginSignUpWindowComponent} from './login-sign-up-window/login-sign-up-window.component';
import {Store} from '@ngrx/store';
import {AppGrumatoState} from '../../store/app-grumato.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private httpService: HttpService, private store: Store<AppGrumatoState>, private dialogService: NbDialogService) {
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
    }));
  }

  isUserName(): boolean {
    return !this.userName;
  }

  open() {
    let userLogin: string = '';
    let userPassword: string = '';
    this.dialogService.open(LoginSignUpWindowComponent, {
      context: {},
    }).onClose.subscribe(value => {
      if (value) {
       userLogin = value.name;
       userPassword = value.password
      }
      this.store.dispatch(new SignUpUser({
        userName: userLogin,
        password: userPassword
      }));
    }).add();

  }

}
