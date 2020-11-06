import {DataState, initialDataState} from '../components-state/data.state';
import {EditorAction, EEditorActions} from './components.action';

export const componentsReducer = (
  state = initialDataState,
  action: EditorAction
): DataState => {
    switch (action.type) {
      case EEditorActions.SaveCustomers: {
        let modifiedState:  DataState = {...state};
        modifiedState.customer = action.payload;
        alert(modifiedState.customer.name + "changed");
        return {
          ...modifiedState,
          customer: action.payload
        }
      }
      case EEditorActions.SaveOrders: {
        let modifiedState:  DataState = {...state};
        modifiedState.order = action.payload;
        alert(modifiedState.order.name + "changed");
        return {
          ...modifiedState,
          order: action.payload
      }
      case EEditorActions.SaveUsers: {
        let modifiedState:  DataState = {...state};
        modifiedState.user = action.payload;
        alert(modifiedState.user.name + "changed");
        return {
          ...modifiedState,
          user: action.payload
      }
    }
};
