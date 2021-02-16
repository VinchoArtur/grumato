import {Employees} from "../users-model/user.model";
import {OrderEntry} from "../orders-model/order.model";
import {CustomerEntry} from "../customers-model/customer.model";

export interface DataModel {
  users: Employees[],
  orders: OrderEntry[],
  customers: CustomerEntry[]
}
