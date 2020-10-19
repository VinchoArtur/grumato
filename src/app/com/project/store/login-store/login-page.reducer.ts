import {createReducer, on} from "@ngrx/store";
import {initialLoginPageState, LoginPageState} from "./login-page.state";
import {LoginActions, LoginPageActions} from "./login-page.actions";

export const loginPageReducers = (
  state = initialLoginPageState,
  action: LoginActions
): LoginPageState => {
  switch (action.type) {
    case LoginPageActions.Login: {
      let modifiedState: LoginPageState = {...state};
      let userName = action.payload.userName + 'changed';
      modifiedState.login.userName = userName;
      alert(userName);
      return {
        ...modifiedState,
        login: action.payload
      }
    }
  }
};