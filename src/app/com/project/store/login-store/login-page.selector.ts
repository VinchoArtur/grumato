import {LoginPageState} from "./login-page.state";
import {createSelector} from "@ngrx/store";
import {AppGrumatoState} from "../app-grumato.state";

const selectLoginPage = (state: AppGrumatoState) => state.loginState;

export const selectUserName = createSelector (
  selectLoginPage,
  (state:LoginPageState) => state.login.userName
);
