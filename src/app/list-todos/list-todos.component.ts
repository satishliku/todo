import { Component, OnInit } from '@angular/core';


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

todos=[
  new Todo(1,"java",false,new Date()),
  new Todo(2,".Net",false,new Date()),
  new Todo(3,"PHP",false,new Date()),
  new Todo(4,"C#",false,new Date())
  
]

  // todo={
  //   id:1,description:'java'
  // }
  constructor() { }

  ngOnInit() {
  }

}