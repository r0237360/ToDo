import { Injectable } from '@angular/core';
import { ToDo } from '../Class/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  getid: number;
  

  constructor() { }

 
 
  //Verschillende manier om array op te vullen
  // this.todos.ToDo.push(new ToDo(1, "Winkelen", "Ga naar winkel", true));
  /* this.todos.ToDo = [
    new ToDo(1, 'Winkelen', 'Ga naar winkel', true),
    
  ]
 */

 // Creeer een array met data
  todos: ToDo[] = [
    new ToDo(1, 'Winkelen', 'Ga naar de winkel',true),
    new ToDo(2, 'Tuinieren', 'Werk in de tuin',true),
    new ToDo(3, 'Auto wassen', 'Was de auto',false),
    new ToDo(4, 'Afval', 'Zet afval buiten',true),
    new ToDo(5, 'Betaal rekeningen', 'Betaal openstaande rekeningen',false),
    new ToDo(6, 'Belastingen', 'Vul je belastingaangifte in',false),
  
  ]

  // returns een array met alle items
  getAllTodos(): ToDo[]{
    return this.todos;
  }  
  // returns een array met alleen de items waar done = true 
  getOnlyTodos(): ToDo[]{
    return this.todos.filter(t => t.done === false);
  }

  // returns een array met alleen de items waar done = false
  getOnlyDones(): ToDo[]{
    return this.todos.filter(f => f.done === true);
  }



  // Working on 
  getToDoById(id: number): ToDo{
    let getid: number;
    getid = id;
    return this.todos.filter(i => i.id === id)
    
  }
  
  // Working on
  updateToDoById(id: number){
  this.getToDoById(id)
  }

  // Working on
  flipDoneSwitch(todo){
  this.updateToDoById(todo.id);

  }
  
  

}
