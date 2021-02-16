import {EditorAction, EEditorActions} from './components.action';
import {DataState, initialDataState} from "../components-state/data.state";

export const componentsReducers = (
  state = initialDataState,
  action: EditorAction
): DataState => {
  switch (action.type) {
    case EEditorActions.GetAllDataLoaded: {
      return {
        ...state,
        data: action.payload.data
      }
    }
  }
};
