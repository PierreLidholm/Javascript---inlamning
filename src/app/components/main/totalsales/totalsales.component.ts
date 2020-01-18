import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalsales',
  templateUrl: './totalsales.component.html',
  styleUrls: ['./totalsales.component.css']
})
export class TotalsalesComponent implements OnInit {

  currency;
  amount;
  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales')
    .then(data => data.json())
    .then(data => {
      this.currency = data.currency;
      this.amount = data.amount;
    })
  }

}
