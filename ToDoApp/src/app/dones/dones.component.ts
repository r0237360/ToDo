import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-dones',
  templateUrl: './dones.component.html',
  styleUrls: ['./dones.component.css']
})
export class DonesComponent implements OnInit {
//initializing an array to receive the data from the service
  public todos = [];

  //constructor with DI "consuming" the todo service
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //calling the data from the service into the local array
    this.todos = this.todoService.getOnlyDones();
  }

}
