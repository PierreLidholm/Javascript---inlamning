import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  tickets = [];
  initials: Array<{i: string}> = [];
  time: Array<{t: string}> = [];
  date: Array<{d: string}> = [];

  icons = [
    {"ic": "icon-rounded-primary icon-rounded-md"}, 
    {"ic": "icon-rounded-info icon-rounded-md"}, 
    {"ic": "icon-rounded-danger icon-rounded-md"}, 
    {"ic": "icon-rounded-warning icon-rounded-md"}, 
    {"ic": "icon-rounded-info icon-rounded-md"} ];

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/tickets')
    .then(data => data.json())
    .then(data => {
      this.tickets = data[1].tickets;

      for(let i = 0; i < data[1].tickets.length; i++)
      {
        let sTime = data[1].tickets[i].date;
        this.date[i] = sTime.substring(0, sTime.indexOf(','));
        this.time[i] = sTime.substring(sTime.indexOf(',') + 1, sTime.length);
        this.initials[i] = data[1].tickets[i].name.match(/\b\w/g).join('');
      }
    })
  }

}
