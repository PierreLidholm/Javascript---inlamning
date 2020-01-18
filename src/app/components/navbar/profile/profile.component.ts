import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  fullName = '';

  constructor() { }

  ngOnInit() {
    fetch('http://inlupp-fa.azurewebsites.net/api/users?firstname=Pierre&lastname=Lidholm')
    .then(data => data.text())
    .then(data => {
      this.fullName = data;
    })
  }

}
