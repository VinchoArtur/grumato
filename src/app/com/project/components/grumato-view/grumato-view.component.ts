import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-grumato-view',
  templateUrl: './grumato-view.component.html',
  styleUrls: ['./grumato-view.component.css']
})
export class GrumatoViewComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.router.navigate(['']);
  }

  tabs: any[] = [
    {
      title: 'Users',
      route: 'users',
    },
    {
      title: 'Orders',
      responsive: true,
      route: 'orders',
    },
    {
      title: 'Customers',
      responsive: true,
      route: 'customers',
    }
  ];

}
