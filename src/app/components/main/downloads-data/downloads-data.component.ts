import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloads-data',
  templateUrl: './downloads-data.component.html',
  styleUrls: ['./downloads-data.component.css']
})
export class DownloadsDataComponent implements OnInit {

  online; 
  offline;

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/downloads')
    .then(res => res.json())
    .then(data => {
      this.offline = data[0].offlineAmount;
      this.online = data[1].onlineAmount;
    })
  }

}
