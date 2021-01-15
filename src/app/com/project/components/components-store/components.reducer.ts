import {DataState, initialDataState} from '../components-state/data.state';
import {EditorAction, EEditorActions} from './components.action';

export const componentsReducers = (
  state = initialDataState,
  action: EditorAction
): DataState => {
  switch (action.type) {
    case EEditorActions.SaveCustomers: {
      let modifiedState = {...state.customer};
      return {
        user: {...state.user},
        customer: modifiedState,
        order: {...state.order}
      }
    }
    case EEditorActions.SaveOrders: {
      let modifiedState = {...state.order};
      return {
        user: {...state.user},
        customer: {...state.customer},
        order: modifiedState
      }
    }
    case EEditorActions.SaveUsers: {
      let modifiedState = {...state.user};
      return {
        user: modifiedState,
        customer: {...state.customer},
        order: {...state.order}
      }
    }
    case EEditorActions.UserLoaded: {
      let modifiedState = {...state};
      modifiedState ={
        user: action.payload,
        order: [],
        customer: []
      };
      return modifiedState;
    }
  }
};
