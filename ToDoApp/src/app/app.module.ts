import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonesComponent } from './dones/dones.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './Service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    DonesComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
