import { Injectable } from '@angular/core';
import { ToDo } from '../Class/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  

  constructor() { }

 
 
  //Verschillende manier om array op te vullen
  // this.todos.ToDo.push(new ToDo(1, "Winkelen", "Ga naar winkel", true));
  /* this.todos.ToDo = [
    new ToDo(1, 'Winkelen', 'Ga naar winkel', true),
    
  ]
 */

 // Creeer een array met data
  todos: ToDo[] = [
    new ToDo(1, 'Afval', 'Zet afval buiten',true),
    new ToDo(2, 'Betaal rekeningen', 'Betaal openstaande rekeningen',false),
    new ToDo(3, 'Tuinieren', 'Werk in de tuin',true),
    new ToDo(4, 'Winkelen', 'Ga naar de winkel',true),
    new ToDo(5, 'Belastingen', 'Vul je belastingaangifte in',false),
    new ToDo(6, 'Auto wassen', 'Was de auto',false),
  ]

  // returns een array met alle ToDo items
  getAllTodos(): ToDo[]{
    return this.todos;
  }  
  // returns een array van ToDo's met alleen de items waar done = true 
  getOnlyTodos(): ToDo[]{
    return this.todos.filter(t => t.done === false);
  }

  // returns een array van ToDo's met alleen de items waar done = false
  getOnlyDones(): ToDo[]{
    return this.todos.filter(f => f.done === true);
  }

  // Get Todo object met ID nummmer - dit is een sub-methode van updateTodoById
  getTodoById(id: number): ToDo{
    return this.todos
    .filter(todo => todo.id === id)
    .pop();
  }
  
  // Update the Todo object => done to "true" by ID - this is a sub-methode of flipDoneSwitch
  updateTodoById(id: number, values: Object = {}): ToDo{
    let todo = this.getTodoById(id);
    if(!todo){
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  // Checkbox checked roept deze methode op om done attribuut op "false" te zetten.
  flipDoneSwitch(todo: ToDo){
    let justDoneTodo = this.updateTodoById(todo.id,{
      done: !todo.done
    });
    return justDoneTodo;
  }
}
  
  


