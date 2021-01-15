import {ActionReducerMap} from "@ngrx/store";
import {AppGrumatoState} from "./app-grumato.state";
import {loginPageReducers} from "./login-store/login-page.reducer";
import {componentsReducers} from '../components/components-store/components.reducer';

export const appReducers: ActionReducerMap<AppGrumatoState, any> = {
  loginState: loginPageReducers,
  isLoading: state => state,
  dataState: componentsReducers
};
