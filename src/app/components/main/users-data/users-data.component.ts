import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-data',
  templateUrl: './users-data.component.html',
  styleUrls: ['./users-data.component.css']
})
export class UsersDataComponent implements OnInit {

  users;
  growth;
  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-users')
    .then(data => data.json())
    .then(data => {
      this.users = data.users;
      this.growth = data.growth;
    })
  }

}
