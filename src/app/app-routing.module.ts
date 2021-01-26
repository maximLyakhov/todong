import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyDescGuard } from './empty-desc.guard';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
  path: 'index', 
  component: TodoListComponent
  },
  {
  path: 'detail/:date',
  canActivate:[EmptyDescGuard],
  component: TodoDetailComponent,
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
