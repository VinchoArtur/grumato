import {Action} from '@ngrx/store';
import {UsersEntry} from '../component-models/users-model/user.model';
import {OrderEntry} from '../component-models/orders-model/order.model';
import {CustomerEntry} from '../component-models/customers-model/customer.model';

export enum EEditorActions {
  SaveUsers = "[Editor] Save users",
  SaveOrders = "[Editor] Save orders",
  SaveCustomers = "[Editor] Save customers",
}



export class SaveUsers implements Action {
  public readonly type = EEditorActions.SaveUsers;
  constructor(public payload: UsersEntry[]){
    console.log(payload);
  }
}

export class SaveOrders implements Action {
  public readonly type = EEditorActions.SaveOrders;
  constructor(public payload: OrderEntry[]){
    console.log(payload);
  }
}

export class SaveCustomers implements Action {
  public readonly type = EEditorActions.SaveCustomers;
  constructor(public payload: CustomerEntry[]){
    console.log(payload);
  }
}

export type EditorAction = SaveUsers | SaveOrders | SaveCustomers;
