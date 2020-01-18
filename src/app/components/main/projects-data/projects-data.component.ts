import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-data',
  templateUrl: './projects-data.component.html',
  styleUrls: ['./projects-data.component.css']
})
export class ProjectsDataComponent implements OnInit {

  projects;
  growth;

  constructor() { }

  ngOnInit() {
    fetch('https://inlupp-fa.azurewebsites.net/api/total-projects')
    .then(data => data.json())
    .then(data => {
      this.projects = data.projects;
      this.growth = data.growth;
    })
  }

}
