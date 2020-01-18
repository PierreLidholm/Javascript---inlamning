import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome-message',
  templateUrl: './welcome-message.component.html',
  styleUrls: ['./welcome-message.component.css']
})
export class WelcomeMessageComponent implements OnInit {

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
