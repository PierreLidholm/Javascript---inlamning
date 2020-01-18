import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalorders',
  templateUrl: './totalorders.component.html',
  styleUrls: ['./totalorders.component.css']
})
export class TotalordersComponent implements OnInit {

  currency;
  amount;

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-orders')
    .then(data => data.json())
    .then(data => {
      this.currency = data.currency;
      this.amount = data.amount;
    })
  }

}
