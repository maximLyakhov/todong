import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { HttpClientModule } from '@angular/common/http';
import { BackService } from './shared/back.service';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginGuard } from './shared/login.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './shared/material.module';
import { RegistrationComponent } from './registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'todolist', canActivate: [LoginGuard], component: TodoListComponent },
  { path: 'new', canActivate: [LoginGuard], component: TodoFormComponent },
  { path: 'details/:date', component: TodoDetailsComponent },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'dashboard',
    canActivate: [LoginGuard],
    component: DashboardComponent,
  },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoDetailsComponent,
    LoginPageComponent,
    DashboardComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule,
  ],
  providers: [FormBuilder, BackService],
  bootstrap: [AppComponent],
})
export class AppModule {}
