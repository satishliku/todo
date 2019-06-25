import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(
    private http:HttpClient
  ) {}
    
   

   retriveAllTodo(username)
   {
     return this.http.get<Todo[]>(`http://localhost:9090/users/${username}/todos`)
   }
   
}
