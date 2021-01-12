import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbDialogService, NbToastrService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {select, Store} from '@ngrx/store';
import {HttpService} from '../../services/http.service';
import {CustomerEntry} from '../component-models/customers-model/customer.model';
import {SaveCustomers} from '../components-store/components.action';
import {CreateCustomerComponent} from '../add-data-modal-window/create-customer/create-customer.component';
import {OrderEntry} from '../component-models/orders-model/order.model';

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
  customers: CustomerEntry[] = [{
    surname: 'test',
    name: 'test',
    patronymic: 'test',
    customercol: 'test',
    company: 'test',
    companyNumber: 'test',
  }];
  data = [];
  surname: string = '';
  name: string = '';
  patronymic: string = '';
  customercol: string = '';
  company: string = '';
  companyNumber: string = '';

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<CustomerEntry>,
              private dialogService: NbDialogService,
              private cdr: ChangeDetectorRef,
              // private store: Store<AppState>,
              private toast: NbToastrService,
              private postService: HttpService) {
    // this.customers$.subscribe(customers => {
    //   this.customers = (customers as CustomerEntry[]);
    // });

    // if (this.customers.length > 0) {
    //   for (let customer of this.customers) {
    //     this.customerName = customer.name;
    //     this.customerOrder = customer.Order;
    //     this.customerCompany = customer.CompanyName;
    //     this.customerPay = customer.Pay;
    //   }
    // }
  }

  ngOnInit(): void {
    this.postService.getCustomers(this.customers).subscribe(value => console.log(value));
  }

  onSave() {
    console.log(this.customers);
    this.postService.postCustomer(this.customers).subscribe(value => {
      console.log(value);
    });
    // this.store.dispatch(new SaveCustomers(this.customers));
  }


  onAddCustomer() {
    this.dialogService.open(CreateCustomerComponent).onClose.subscribe(value => {
      let newCustomer:CustomerEntry = {
        surname: value.surname,
        name: value.name,
        patronymic: value.patronymic,
        customercol: value.customercol,
        company: value.company,
        companyNumber: value.companyNumber
      };
      for (let order of this.customers) {
        if (order.name == newCustomer.name) {
          // ToDo change to filter in backend part
          this.toast.danger("Такой заказчик существует", "Внимание");
          return;
        }
      }
      this.customers.push(
        {surname: value.surname,
          name: value.name,
          patronymic: value.patronymic,
          customercol: value.customercol,
          company: value.company,
          companyNumber: value.companyNumber}
      );
      this.cdr.detectChanges();
      this.postService.postCustomer(this.customers).subscribe(value => {
        console.log(value);
      });
    });
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
