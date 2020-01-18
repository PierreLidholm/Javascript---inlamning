import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.css']
})
export class BellComponent implements OnInit {

  notifications = [];
  icon: Array<{ic: string}> = [];
  iconBG: Array<{bg: string}> = [];
  message: Array<{title: string}> = [];

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/notifications')
    .then(res => res.json())
    .then(data => {
      this.notifications = data;
      
      for(let i = 0; i < this.notifications.length;i++)
      {
        this.message.push({title: this.notifications[i].title});
        
        if(this.message[i].title === "Application Error")
        {
          this.icon.push({ic: "mdi mdi-information mx-0"});
          this.iconBG.push({bg: "preview-icon bg-success"});
        }
        else if(this.message[i].title === "Settings")
        {
          this.icon.push({ic: "mdi mdi-settings mx-0"});
          this.iconBG.push({bg: "preview-icon bg-warning"});
        }
        else {
          this.icon.push({ic: "mdi mdi-account-box mx-0"});
          this.iconBG.push({bg: "preview-icon bg-info"});
        }
        
      }
    })
  }

}
