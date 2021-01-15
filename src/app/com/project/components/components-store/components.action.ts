import {Action} from '@ngrx/store';
import {Employees} from '../component-models/users-model/user.model';
import {OrderEntry} from '../component-models/orders-model/order.model';
import {CustomerEntry} from '../component-models/customers-model/customer.model';

export enum EEditorActions {
  GetCustomers = "[Editor] Get customers",
  SaveCustomers = "[Editor] Save customers",
  GetOrders = "[Editor] Get orders",
  SaveOrders = "[Editor] Save orders",
  GetUsers = "[Editor] Get users",
  SaveUsers = "[Editor] Save users",
  UserLoaded = "[Editor] Users loaded",
}


export class GetCustomers implements Action {
  public readonly type = EEditorActions.GetCustomers;
  constructor(public payload: CustomerEntry[]){
    console.log(payload);
  }
}
export class SaveCustomers implements Action {
  public readonly type = EEditorActions.SaveCustomers;
  constructor(public payload: CustomerEntry){
    console.log(payload);
  }
}

export class GetOrders implements Action {
  public readonly type = EEditorActions.GetOrders;
  constructor(public payload: OrderEntry[]){
    console.log(payload);
  }
}
export class SaveOrders implements Action {
  public readonly type = EEditorActions.SaveOrders;
  constructor(public payload: OrderEntry){
    console.log(payload);
  }
}

export class GetUsers implements Action {
  public readonly type = EEditorActions.GetUsers;
  constructor(public payload: Employees[]){
    console.log(payload);
  }
}
export class SaveUsers implements Action {
  public readonly type = EEditorActions.SaveUsers;
  constructor(public payload: Employees){
  }
}

export class UsersLoaded implements Action {
  public readonly type = EEditorActions.UserLoaded;
  constructor(public payload: Employees[]) {}
}

export type EditorAction =
  GetCustomers |
  SaveCustomers |
  GetOrders |
  SaveOrders |
  GetUsers |
  SaveUsers |
  UsersLoaded;
