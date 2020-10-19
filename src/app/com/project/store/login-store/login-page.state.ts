import {LoginModel} from "../../login/login-model/login.model";

export interface LoginPageState {
  login: LoginModel;
}

export const initialLoginPageState: LoginPageState = {
  login: null
};
