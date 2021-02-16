import {CustomerEntry} from '../customers-model/customer.model';
import {OrderEntry} from '../orders-model/order.model';
import {Employees} from '../users-model/user.model';

export interface DateEntry {
  customer: CustomerEntry;
  order: OrderEntry;
  user: Employees;
}
