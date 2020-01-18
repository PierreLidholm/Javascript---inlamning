import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message: [];

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/messages')
    .then(data => data.json())
    .then(data => {
      this.message = data;
      
    })
  }

}
