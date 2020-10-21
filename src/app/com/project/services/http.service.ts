import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SignUpModel} from '../login/login-model/sign-up.model';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
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
}
