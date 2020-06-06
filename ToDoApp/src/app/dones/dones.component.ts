import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-dones',
  templateUrl: './dones.component.html',
  styleUrls: ['./dones.component.css']
})
export class DonesComponent implements OnInit {

  public todos = [];

  //constructor with DI "consuming" the todo service
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }

}
