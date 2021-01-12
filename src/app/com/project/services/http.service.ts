import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignUpModel} from '../login/login-model/sign-up.model';
import {LoginModel} from '../login/login-model/login.model';
import {UsersEntry} from '../components/component-models/users-model/user.model';
import {OrderEntry} from '../components/component-models/orders-model/order.model';
import {CustomerEntry} from '../components/component-models/customers-model/customer.model';
import {NbToastrService} from '@nebular/theme';
import {Observable} from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient,
              private toasterService: NbToastrService) {
  }

  getUserData() {
    return this.http.get('http://localhost:8080/users');
  }

  signUpUserData(userData: SignUpModel) {
    let requestBody = {
      login: {
        userName: userData.userName,
        userPassword: userData.password
      }
    }
    return this.http.post('http://localhost:8080/login/add', {login: {
      userName: userData.userName, userPassword: userData.password
      }})
  }

  signInUserData(loginData: LoginModel){
    let requestBody = {
      login: {
        userName: loginData.userName,
        userPassword: loginData.password
      }
    }
    return this.http.post('http://localhost:8080/login/auth', {login: {
        userName: loginData.userName, userPassword: loginData.password
      }})
  }


  //      additionally http ref



  getCustomers(customer: CustomerEntry[]){
    let body = {
      customerEntry: customer
    };
    let value = JSON.stringify(body);
    console.log("getCustomers");
    console.log(value);
    return this.http.get("http://localhost:8080/customers", {headers: {"Content-type": "application/json"}})
  }
  postCustomer(customer: CustomerEntry[]) {
    let body = {
      customerEntry: customer
    };
    let value = JSON.stringify(body);
    console.log("value...");
    console.log(value);
    return this.http.post("http://localhost:8080/customers/add", value, {headers: {"Content-type": "application/json"}})
  }
  deleteCustomer(value: CustomerEntry) {
    let body = {
      customer: value
    };
    let s = JSON.stringify(body);
    console.log("delete");
    console.log(value);
    return this.http.post("http://localhost:8080/customers/delete", s, {headers: {"Content-type": "application/json"}})
  }

  getOrders(order: OrderEntry[]){
    let body = {
      orderEntry: order
    };
    let value = JSON.stringify(body);
    console.log("getOrders");
    console.log(value);
    return this.http.get("http://localhost:8080/orders", {headers: {"Content-type": "application/json"}})
  }
  postOrders(order: OrderEntry[]) {
    let body = {
      orderEntry: order
    };
    let value = JSON.stringify(body);
    console.log("value...");
    console.log(value);
    return this.http.post("http://localhost:8080/orders/add", value, {headers: {"Content-type": "application/json"}})
  }

  deleteOrder(value: OrderEntry) {
    let body = {
      order: value
    };
    let s = JSON.stringify(body);
    console.log("delete");
    console.log(value);
    return this.http.post("http://localhost:8080/orders/delete", s, {headers: {"Content-type": "application/json"}})
  }

  getUsers(user: UsersEntry[]): Observable<UsersEntry[]>{
    let body = {
      userEntry: user
    };
    let value = JSON.stringify(body);
    console.log("getUsers");
    console.log(value);
    return this.http.get("http://localhost:8080/users", {headers: {"Content-type": "application/json"}}) as Observable<UsersEntry[]>;
  }
  postUsers(user:UsersEntry[]) {
    let body = {
      userEntry: user
    };
    let value = JSON.stringify(body);
    console.log("value...");
    console.log(value);
    return this.http.post("http://localhost:8080/users/add", value, {headers: {"Content-type": "application/json"}})
  }

  deleteUser(value: UsersEntry) {
    let body = {
      user: value
    };
    let s = JSON.stringify(body);
    console.log("delete");
    console.log(value);
    return this.http.post("http://localhost:8080/users/delete", s, {headers: {"Content-type": "application/json"}})
  }
}
