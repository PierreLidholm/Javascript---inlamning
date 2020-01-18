import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-report',
  templateUrl: './sales-report.component.html',
  styleUrls: ['./sales-report.component.css']
})
export class SalesReportComponent implements OnInit {

  downloads;
  purchases;
  users;
  growth;

  constructor() { }

  ngOnInit() {

    fetch('https://inlupp-fa.azurewebsites.net/api/sales-report')
    .then(res => res.json())
    .then(data => {
      this.downloads = data.downloads;
      this.purchases = data.purchases;
      this.users = data.users;
      this.growth = data.growth;
    })
  }

}
