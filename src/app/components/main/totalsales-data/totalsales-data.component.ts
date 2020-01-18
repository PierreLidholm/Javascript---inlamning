import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalsales-data',
  templateUrl: './totalsales-data.component.html',
  styleUrls: ['./totalsales-data.component.css']
})
export class TotalsalesDataComponent implements OnInit {

  revenue;
  returns;
  queries;
  invoices;

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-sales-chart')
    .then(data => data.json())
    .then(data => {
      this.revenue = data.revenue;
      this.returns = data.returns;
      this.queries = data.queries;
      this.invoices = data.invoices;
    })
  }

}
