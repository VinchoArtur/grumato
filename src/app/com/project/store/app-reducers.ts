import {ActionReducerMap} from "@ngrx/store";
import {AppGrumatoState} from "./app-grumato.state";
import {componentsReducers} from '../components/components-store/components.reducer';
import {DataState} from "../components/components-state/data.state";

export const appReducers: ActionReducerMap<AppGrumatoState, any> = {
  data: componentsReducers
};
