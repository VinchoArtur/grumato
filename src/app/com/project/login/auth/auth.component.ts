import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';
import {LoginPageActions, LoginUser, SignUpUser} from '../../store/login-store/login-page.actions';
import {NbDialogRef, NbDialogService, NbToastrService} from '@nebular/theme';
import {LoginSignUpWindowComponent} from './login-sign-up-window/login-sign-up-window.component';
import {Store} from '@ngrx/store';
import {AppGrumatoState} from '../../store/app-grumato.state';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private httpService: HttpService, private store: Store<AppGrumatoState>, private dialogService: NbDialogService, private toastrService: NbToastrService) {
  }


  /**
   * Login user
   */
  userName: string;

  /**
   * Password user
   */
  password: string;

  loading: boolean;

  ngOnInit(): void {
  }


  open() {
    let userLogin: string = '';
    let userPassword: string = '';
    this.dialogService.open(LoginSignUpWindowComponent, {
      context: {},
    }).onClose.subscribe(value => {
      if (value) {
        userLogin = value.name;
        userPassword = value.password;
        this.store.dispatch(new SignUpUser({
          userName: userLogin,
          password: userPassword
        }));
      }
    }).add();

  }

  onSubmit() {
    // this.store.dispatch(new LoginUser({
    //   userName: this.userName,
    //   password: this.password,
    //   userId: 111
    // }));

    this.loading = true;
    setTimeout(() => this.loading = false, 3000);

    if (this.userName && this.password) {
      this.store.dispatch(new LoginUser({
        userName: this.userName,
        password: this.password
      }));
    }
  }

  onClear(){
    if (this.userName || this.password){
      this.userName = "";
      this.password = "";
      this.toastrService.success("Clear", "success", {duration: 2000})
    }
    return status = "success";
  }

  isUserName(): boolean {
    return !this.userName;
  }

  isPassword(): boolean {
    return !this.password;
  }

}
