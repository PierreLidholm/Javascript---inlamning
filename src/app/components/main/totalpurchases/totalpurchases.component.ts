import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalpurchases',
  templateUrl: './totalpurchases.component.html',
  styleUrls: ['./totalpurchases.component.css']
})
export class TotalpurchasesComponent implements OnInit {

  currency;
  amount;

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-purchases')
    .then(data => data.json())
    .then(data => {
      this.currency = data.currency;
      this.amount = data.amount;
    })
  }

}
