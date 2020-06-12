import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {

  //constructor with DI "consuming" the todo service
  constructor(private todoService: TodoService) { }

  
  @Input('parentdata') public tododetail;
  @Output() public childEvent = new EventEmitter();

  ngOnInit(): void {
  }

  //methode aangeroepen door "remove item" button
  delTodo(todo){
    this.todoService.deleteTodo(todo);
  // Reload array na het verwijderen van een item; nieuwe data gegevens laden.
    this.reloadData();
  }

  // methode aangeroepen door checkbox aan te vinken
  toDoChecked(todo){
    this.todoService.flipDoneSwitch(todo); 
  // Reload array na checkbox checked, om nieuwe data gegevens te laden. 
    this.reloadData();
  }

  reloadData(){
    //this.tododetail = this.todoService.getOnlyTodos();  
    this.childEvent.emit(this.todoService.getOnlyTodos());
 

  }




}
