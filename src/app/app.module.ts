import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoService } from './todo.service';
import { TodoOneComponent } from './todo-one/todo-one.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [FormBuilder, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
