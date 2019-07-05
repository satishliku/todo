import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../service/adopt/project.service';

export class Projects{
 
  constructor(){}
    
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  Projects:Projects[]
  
  constructor(
    private projectservice:ProjectService
  ) { }

  ngOnInit() {
    this.projectservice.retriveAllProject().subscribe(
      response =>{
        console.log(response);
        this.Projects=response;
      }
      
    )
  }

}
