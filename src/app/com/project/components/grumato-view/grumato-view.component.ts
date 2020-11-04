import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grumato-view',
  templateUrl: './grumato-view.component.html',
  styleUrls: ['./grumato-view.component.css']
})
export class GrumatoViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
