import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbDialogService, NbToastrService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {select, Store} from '@ngrx/store';
import {HttpService} from '../../services/http.service';
import {CustomerEntry} from '../component-models/customers-model/customer.model';
import {SaveCustomers} from '../components-store/components.action';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customColumn = 'Name';
  defaultColumns = ['Order', 'CompanyName', 'Pay'];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<CustomerEntry>;


  // customers$ = this.store.pipe(select(selectCustomers));
  customers: CustomerEntry[] = [];
  data = [];
  customerName: string = '';
  customerOrder: string = '';
  customerCompany: string = '';
  customerPay: string = '';

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<CustomerEntry>,
              private dialogService: NbDialogService,
              private cdr: ChangeDetectorRef,
              // private store: Store<AppState>,
              private toast: NbToastrService,
              private postService: HttpService) {
    // this.customers$.subscribe(customers => {
    //   this.customers = (customers as CustomerEntry[]);
    // });

    if (this.customers.length > 0) {
      for (let customer of this.customers) {
        this.customerName = customer.name;
        this.customerOrder = customer.Order;
        this.customerCompany = customer.CompanyName;
        this.customerPay = customer.Pay;
      }
    }
  }

  ngOnInit(): void {
  }

  onSave() {
    console.log(this.customers);
    this.postService.postCustomer(this.customers).subscribe(value => {
      console.log(value);
    });
    // this.store.dispatch(new SaveCustomers(this.customers));
  }


  onAddCustomer() {
    // this.dialogService.open(AddingCustomerComponent).onClose.subscribe(value => {
    //   for (let order of this.customers) {
    //     if (order.name == value.name) {
    //       this.toast.danger("Такой заказчик существует", "Внимание");
    //       return;
    //     }
    //   }
    //   this.customers.push(
    //     {name: value.name, Order: value.Order, CompanyName: value.CompanyName, Pay: value.Pay}
    //   );
    //   this.cdr.detectChanges();
    //   this.postService.postCustomer(this.customers).subscribe(value => {
    //     console.log(value);
    //   });
    // });

  }

  onDelete(dataUser: CustomerEntry) {
    for (let item = 0; item< this.customers.length; item++) {
      if (this.customers[item].name == dataUser.name) {
        this.customers.splice(item, 1);
        this.cdr.detectChanges();
      }
    }
    this.postService.deleteCustomer(dataUser).subscribe(value => console.log(value))
  }
}
