import {initialLoginPageState, LoginPageState} from "./login-store/login-page.state";
import {DataState} from '../components/components-state/data.state';

export interface AppGrumatoState {
  loginState: LoginPageState;
  isLoading: boolean;
  dataState: DataState

}

export const initialAppGrumatoState: AppGrumatoState = {
  loginState: initialLoginPageState,
  isLoading: false,
  dataState: null,
};
