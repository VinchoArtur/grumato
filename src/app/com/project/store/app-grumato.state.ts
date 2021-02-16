import {DataState, initialDataState} from '../components/components-state/data.state';
import {DataModel} from "../components/component-models/data-model/data-model";

export interface AppGrumatoState {
  data: DataState
}

export const initialAppGrumatoState: AppGrumatoState = {
  data: initialDataState,
};

export function getInitialState(): AppGrumatoState {
  return initialAppGrumatoState;
}
