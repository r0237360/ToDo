import { Component, OnInit } from '@angular/core';
import { TodoService } from '../Service/todo.service';
import { ToDo } from '../Class/ToDo';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  //initializing an array to receive the data from the service
  public todos = [];
  //initializing a todo object.
  nieuweTodo: ToDo;
  NewTodoForm: FormGroup;

   //constructor with DI "consuming" the todo service
   // constructor with DI introducing FormBuilder 
  constructor(private todoService: TodoService, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
    //get the data from the service into the local array
    this.todos = this.todoService.getOnlyTodos();
  }

  createForm() {
    this.NewTodoForm = this.fb.group({
       titel: ['', Validators.required],
       omschrijving: ['', Validators.required,]
    });
  }


  /* email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
} */


  

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

  createTodo(titel:string, besch:string){
    this.nieuweTodo = new ToDo(null, titel, besch, false);
    this.todoService.newTodo(this.nieuweTodo);
    this.reloadData();
      
    }
  

  

}
