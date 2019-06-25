import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/todo/data.service';


export class Todo{
  constructor(
    public id:number,
    public description:String,
    public done:boolean,
    public targateDate:Date
    ){}
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

todos:Todo[]

//  todos=[
//    new Todo(1,"java",false,new Date()),
//    new Todo(2,".Net",false,new Date()),
//    new Todo(3,"PHP",false,new Date()),
//    new Todo(4,"C#",false,new Date())
  
//  ]

  // todo={
  //   id:1,description:'java'
  // }
  constructor(
    private todoService:DataService
  ) { }
    
  ngOnInit() {
    this.todoService.retriveAllTodo('in28minutes').subscribe(
      
      reponse=>{
        console.log(reponse);
        this.todos=reponse;
    })
  }

}