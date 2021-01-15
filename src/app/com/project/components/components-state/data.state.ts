import {CustomerEntry} from '../component-models/customers-model/customer.model';
import {OrderEntry} from '../component-models/orders-model/order.model';
import {Employees} from '../component-models/users-model/user.model';

export interface DataState {
  customer: CustomerEntry[];
  order: OrderEntry[];
  user: Employees[];
}

export const initialDataState: DataState = {
  customer: [],
  order: [],
  user: []
}
