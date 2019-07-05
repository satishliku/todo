import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectComponent, Projects } from 'src/app/project/project.component';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private http:HttpClient
  ) { }

  retriveAllProject()
   {
     return this.http.get<Projects[]>(`http://localhost:7201/selfService/project`)
   }
}

