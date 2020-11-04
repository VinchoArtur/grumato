import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbDialogService, NbToastrService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {UsersEntry} from '../component-models/users-model/user.model';
import {OrderEntry} from '../component-models/orders-model/order.model';
import {Store} from '@ngrx/store';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  customColumn = 'Name';
  defaultColumns = ['Customer', 'Developer', 'Time', 'Pay'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<UsersEntry>;

  // orders$ = this.store.pipe(select(selectOrders));
  orders: OrderEntry[];
  orderName: string = '';
  orderCustomer: string = '';
  orderDeveloper: string = '';
  orderTime: string = '';
  orderPay: string = '';

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<UsersEntry>,
              private dialogService: NbDialogService,
              private cdr: ChangeDetectorRef,
              // private store: Store<AppState>,
              private toast: NbToastrService,
              private postService: HttpService) {
    // this.orders$.subscribe(orders => {
    //   this.orders = (orders as OrderEntry[]);
    //   if (this.orders.length > 0) {
    //     for (let order of this.orders) {
    //       this.orderName = order.name;
    //       this.orderCustomer = order.Customer;
    //       this.orderDeveloper = order.Developer;
    //       this.orderTime = order.Time;
    //       this.orderPay = order.Pay;
    //     }
    //   }
    // });
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.orders);
    this.toast.success("Сохранено", "Сохранение");
    this.postService.postOrders(this.orders).subscribe(value => console.log(value));
    // this.store.dispatch(new SaveOrders(this.orders));
  }


  onAddOrder() {
    // this.dialogService.open(AddingOrderComponent).onClose.subscribe(value => {
    //   for (let order of this.orders) {
    //     if (order.name == value.name) {
    //       this.toast.danger("Такой заказ существует", "Внимание");
    //       return;
    //     }
    //   }
    //   this.orders.push(
    //     {name: value.name, Customer: value.Customer, Developer: value.Developer, Time: value.Time, Pay: value.Pay}
    //   );
    //   this.cdr.detectChanges();
    //   this.postService.postOrders(this.orders).subscribe(value => console.log(value));
    // });

  }

  onDelete(dataUser: OrderEntry) {
    for (let item = 0; item< this.orders.length; item++) {
      if (this.orders[item].name == dataUser.name) {
        this.orders.splice(item, 1);
        this.cdr.detectChanges();
      }
    }
    this.postService.deleteOrder(dataUser).subscribe(value => console.log(value))
  }

}
