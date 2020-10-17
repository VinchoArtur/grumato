import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  users: any;
  tabs: any;

  getUserData(){
    this.httpService.getUserData().subscribe(value => {
      this.users = value;
      console.log(this.users);
    });
  }

  ngOnInit(): void {
  }

  onLogin() {

  }
}
