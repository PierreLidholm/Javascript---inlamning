import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-totalgrowth',
  templateUrl: './totalgrowth.component.html',
  styleUrls: ['./totalgrowth.component.css']
})
export class TotalgrowthComponent implements OnInit {

  currency;
  amount;

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-growth')
    .then(data => data.json())
    .then(data => {
      this.currency = data.currency;
      this.amount = data.amount;
    })
  }

}
