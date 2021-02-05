import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './interfaces/login';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class BackService {
  url = 'http://localhost:3000/todos';

  currentUser;

  public authStatus = JSON.parse(localStorage.getItem('auth'));

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  postTodo(todo: Todo) {
    return this.http.post<Todo>(this.url, todo);
  }

  getSingleTodo(date) {
    return this.http.get(`${this.url}/details/${date}`);
  }

  deleteTodo(date) {
    return this.http.delete(`${this.url}/details/${date}`);
  }

  loginSend(login: Login) {
    return this.http.post('http://localhost:3000/login', login);
  }

  registrationSend(reg) {
    return this.http.post('http://localhost:3000/registration', reg);
  }
}
