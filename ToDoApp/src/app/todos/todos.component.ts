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
    //get the data from the service into the local array
    this.todos = this.todoService.getOnlyTodos();
  }

  // methode aangeroepen door checkbox aan te vinken
  toDoChecked(todo){
    this.todoService.flipDoneSwitch(todo); 
  // Reload array na checkbox checked, om nieuwe data gegevens te laden. 
    this.reloadData();
  }

  //methode aangeroepen door "remove item" button
  delTodo(todo){
    this.todoService.deleteTodo(todo);
  // Reload array na het verwijderen van een item; nieuwe data gegevens laden.
    this.reloadData();
  }
 
  reloadData(){
    this.todos = this.todoService.getOnlyTodos();  
  }

}
