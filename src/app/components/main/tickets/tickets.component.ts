import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  years = [];
  

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
    .then(data => data.json())
    .then(data => {
      this.years = data;

    })
  }

}
