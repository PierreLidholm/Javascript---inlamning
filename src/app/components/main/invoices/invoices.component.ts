import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css']
})
export class InvoicesComponent implements OnInit {

  invoices = [];
  status: Array<{c: String}> = [];
  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/open-invoices')
    .then(res => res.json())
    .then(data => {
      this.invoices = data;

      for(let i = 0; i<data.length; i++)
      {
        this.status.push({c: this.invoices[i].status});

        if(this.status[i].c === "Progress")
          this.status[i].c = "badge badge-success badge-fw";
        else if(this.status[i].c === "Open")
          this.status[i].c = "badge badge-warning badge-fw";
        else if(this.status[i].c === "On hold")
          this.status[i].c =  "badge badge-danger badge-fw";
        else 
          this.status[i].c = "badge badge-success badge-fw";
          
      }


    })
  }

}
