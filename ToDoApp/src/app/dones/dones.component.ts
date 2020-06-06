import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';

@Component({
  selector: 'app-dones',
  templateUrl: './dones.component.html',
  styleUrls: ['./dones.component.css']
})
export class DonesComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

}
