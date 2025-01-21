import { Component, OnInit, Input } from '@angular/core';
import { ProjectsInterface } from './projects.interface';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  constructor(private projectsService: ProjectsService) {}

  projects: ProjectsInterface[] = [];

  ngOnInit(): void {
    
    this.projects = this.projectsService.getProjects();

  }
  


}
