import {Action, createAction, props} from '@ngrx/store';
import {LoginModel} from "../../login/login-model/login.model";

export enum LoginPageActions {
  Login = '[Login] Login User'
}

export class LoginUser implements Action {
  public readonly type = LoginPageActions.Login;
  constructor(public payload: LoginModel) {
  }
}

export type LoginActions = LoginUser
