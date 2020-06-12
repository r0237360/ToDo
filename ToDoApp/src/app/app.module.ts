import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonesComponent } from './dones/dones.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './Service/todo.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TododetailComponent } from './tododetail/tododetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonesComponent,
    TodosComponent,
    TododetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
