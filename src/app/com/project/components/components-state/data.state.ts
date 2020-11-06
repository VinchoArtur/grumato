import {CustomerEntry} from '../component-models/customers-model/customer.model';
import {OrderEntry} from '../component-models/orders-model/order.model';
import {UsersEntry} from '../component-models/users-model/user.model';

export interface DataState {
  customer: CustomerEntry;
  order: OrderEntry;
  user: UsersEntry;
}

export const initialDataState: DataState = {
  customer: null,
  order: null,
  user: null
}
