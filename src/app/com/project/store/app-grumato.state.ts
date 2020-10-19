import {initialLoginPageState, LoginPageState} from "./login-store/login-page.state";

export interface AppGrumatoState {
  loginState: LoginPageState;
}

export const initialAppGrumatoState: AppGrumatoState = {
  loginState: initialLoginPageState
};
