import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BackService } from './shared/back.service';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'todolist', component: TodoListComponent},
  { path: 'details/:date', component: TodoDetailsComponent },
  { path: 'new', component: TodoFormComponent},
  { path: 'login', component: LoginPageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoDetailsComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FormBuilder, BackService],
  bootstrap: [AppComponent]
})
export class AppModule { }
