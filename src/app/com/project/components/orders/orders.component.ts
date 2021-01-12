import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbDialogService, NbToastrService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {UsersEntry} from '../component-models/users-model/user.model';
import {OrderEntry} from '../component-models/orders-model/order.model';
import {Store} from '@ngrx/store';
import {HttpService} from '../../services/http.service';
import {CreateOrderComponent} from '../add-data-modal-window/create-order/create-order.component';

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
  orders: OrderEntry[] = [{
    orderDescription: 'test',
    customerCode: 'test',
    dateOfReceiptOfOrder: '2020-11-11',
    orderExecutionDate: '2020-11-11',
    productCode: 'test',
    orderCost: 'test',
  }];
  orderDescription: string = '';
  customerCode: string = '';
  dateOfReceiptOfOrder: Date;
  orderExecutionDate: Date;
  productCode: string = '';
  orderCost: string = '';

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
    this.postService.getOrders(this.orders).subscribe(value => console.log(value));
  }

  onSave() {
    console.log(this.orders);
    this.toast.success("Сохранено", "Сохранение");
    this.postService.postOrders(this.orders).subscribe(value => console.log(value));
    // this.store.dispatch(new SaveOrders(this.orders));
  }


  onAddOrder() {
    this.dialogService.open(CreateOrderComponent).onClose.subscribe(value => {
      let newOrder:OrderEntry = {
        orderDescription: value.orderDescription,
        customerCode: value.customerCode,
        dateOfReceiptOfOrder: value.dateOfReceiptOfOrder,
        orderExecutionDate: value.orderExecutionDate,
        productCode: value.productCode,
        orderCost: value.orderCost
      };
      for (let order of this.orders) {
        if (order.productCode == newOrder.productCode) {
          // ToDo change to filter in backend part
          this.toast.danger("Такой заказ существует", "Внимание");
          return;
        }
      }
      this.orders.push(
        {orderDescription: value.orderDescription,
          customerCode: value.customerCode,
          dateOfReceiptOfOrder: value.dateOfReceiptOfOrder,
          orderExecutionDate: value.orderExecutionDate,
          productCode: value.productCode,
          orderCost: value.orderCost}
      );
      this.cdr.detectChanges();
      this.postService.postOrders([{orderDescription: value.orderDescription,
        customerCode: value.customerCode,
        dateOfReceiptOfOrder: value.dateOfReceiptOfOrder,
        orderExecutionDate: value.orderExecutionDate,
        productCode: value.productCode,
        orderCost: value.orderCost}]).subscribe(value => console.log(value));
    });
  }

  onDelete(dataUser: OrderEntry) {
    for (let item = 0; item< this.orders.length; item++) {
      if (this.orders[item].productCode == dataUser.productCode) {
        this.orders.splice(item, 1);
        this.cdr.detectChanges();
      }
    }
    this.postService.deleteOrder(dataUser).subscribe(value => console.log(value))
  }

}
