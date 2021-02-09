import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbDialogService, NbToastrService, NbTreeGridDataSource, NbTreeGridDataSourceBuilder} from '@nebular/theme';
import {HttpService} from '../../services/http.service';
import {CustomerEntry} from '../component-models/customers-model/customer.model';
import {CreateCustomerComponent} from '../add-data-modal-window/create-customer/create-customer.component';
import {BaseResponse} from "../users/users.component";
import {UserCardsWindowComponent} from '../modals/user-cards-window/user-cards-window.component';

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


  customers: CustomerEntry[] = [];
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
  }

  ngOnInit(): void {
    this.postService.getCustomers().subscribe(value => {
      let parse = JSON.parse((value as BaseResponse).status);
      parse.map(customer => {
        let parse1 = JSON.parse(customer) as CustomerEntry;
        this.customers.push({
          name: parse1.name,
          company: parse1.company,
          companyNumber: parse1.companyNumber,
          customerCode: parse1.customerCode,
          customercol: parse1.customercol,
          patronymic: parse1.patronymic,
          surname: parse1.surname
        })
      })
    });
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
      this.postService.postCustomer(newCustomer).subscribe(value => {
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

  showWorkerInformation(customer: CustomerEntry) {
    this.dialogService.open(UserCardsWindowComponent, {
        context: {
          customer: customer
        }
    }).onClose.subscribe(value => {
      if (value) {
        console.log(value);
      }
    });
  }

}
