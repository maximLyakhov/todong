import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoOneComponent } from './todo-one/todo-one.component';

const routes: Routes = [
  {
  path: 'index', 
  component: TodoListComponent
  },
  {
  path: 'detail/:date', 
  component: TodoOneComponent,
  },
  { 
  path: '',
  redirectTo: 'index',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
