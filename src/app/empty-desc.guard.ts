import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class EmptyDescGuard implements CanActivate {
  constructor(private _router: Router,
  private service: TodoService,
  private active: ActivatedRoute,
  private route: ActivatedRoute) {
  }
  canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const todos = this.service.todos;
    const date = state.url.split('detail/')[1];
    const foundTodo =  todos.find(todo => todo.date === Number(date));
    
    if (foundTodo && foundTodo.description) {
      return true;
    } else {
      alert('you have no rights to cvm here')
      return false;
    }
  }
}