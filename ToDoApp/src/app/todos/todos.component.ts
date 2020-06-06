import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //initializing an array to receive the data from the service
  public todos = []

   //constructor with DI "consuming" the todo service
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //calling the data from the service into the local array
    this.todos = this.todoService.getAllTodos();
  }

}
