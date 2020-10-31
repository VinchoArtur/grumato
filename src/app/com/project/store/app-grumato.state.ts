import {initialLoginPageState, LoginPageState} from "./login-store/login-page.state";

export interface AppGrumatoState {
  loginState: LoginPageState;
  isLoading: boolean;
}

export const initialAppGrumatoState: AppGrumatoState = {
  loginState: initialLoginPageState,
  isLoading: false
};
