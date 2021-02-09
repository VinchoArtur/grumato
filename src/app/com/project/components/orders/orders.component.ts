import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbDialogService, NbToastrService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {Employees} from '../component-models/users-model/user.model';
import {OrderEntry} from '../component-models/orders-model/order.model';
import {HttpService} from '../../services/http.service';
import {CreateOrderComponent} from '../add-data-modal-window/create-order/create-order.component';
import {BaseResponse} from "../users/users.component";
import {UserCardsWindowComponent} from '../modals/user-cards-window/user-cards-window.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  customColumn = 'Name';
  defaultColumns = ['Customer', 'Developer', 'Time', 'Pay'];

  dataSource: NbTreeGridDataSource<Employees>;

  orders: OrderEntry[] = [];
  orderDescription: string = '';
  customerCode: string = '';
  dateOfReceiptOfOrder: Date;
  orderExecutionDate: Date;
  productCode: string = '';
  orderCost: string = '';

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<Employees>,
              private dialogService: NbDialogService,
              private cdr: ChangeDetectorRef,
              private toast: NbToastrService,
              private postService: HttpService) {
  }

  ngOnInit(): void {
    this.postService.getOrders().subscribe(value => {
      let parse = JSON.parse((value as BaseResponse).status);
      parse.map(order => {
        let parse1 = JSON.parse(order) as OrderEntry;
       this.orders.push(parse1);
      })
    });
  }


  onAddOrder() {
    this.dialogService.open(CreateOrderComponent).onClose.subscribe(value => {
      let newOrder: OrderEntry = {
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
        {
          orderDescription: value.orderDescription,
          customerCode: value.customerCode,
          dateOfReceiptOfOrder: value.dateOfReceiptOfOrder,
          orderExecutionDate: value.orderExecutionDate,
          productCode: value.productCode,
          orderCost: value.orderCost
        }
      );
      this.cdr.detectChanges();
      this.postService.postOrders(newOrder).subscribe(value => console.log(value));
    });
  }

  onDelete(dataUser: OrderEntry) {
    for (let item = 0; item < this.orders.length; item++) {
      if (this.orders[item].productCode == dataUser.productCode) {
        this.orders.splice(item, 1);
        this.cdr.detectChanges();
      }
    }
    this.postService.deleteOrder(dataUser).subscribe(value => console.log(value))
  }

  showWorkerInformation(order: OrderEntry) {
    this.dialogService.open(UserCardsWindowComponent, {
      context: {
        order: order
      }
    }).onClose.subscribe(value => {
      if (value) {
        console.log(value)
      }
    });
  }

}
