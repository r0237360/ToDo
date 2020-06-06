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
    new ToDo(1, 'Winkelen', 'Ga naar de winkel',true),
    new ToDo(2, 'Tuinieren', 'Werk in de tuin',true),
    new ToDo(3, 'Auto wassen', 'Was de auto',false),
    new ToDo(4, 'Afval', 'Zet afval buiten',true),
    new ToDo(5, 'Betaal rekeningen', 'Betaal openstaande rekeningen',false),
    new ToDo(1, 'Belastingen', 'Vul je belastingaangifte in',false),
  
  ]


  getAllTodos(): ToDo[]{
    return this.todos;
  }  

  


}
