import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './interfaces/login';
import { LoginInfo } from './interfaces/login.info.dto';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class BackService {
  url = 'http://localhost:3000/todos';

  currentUser: string | undefined;

  currentToken: string | undefined;

  public authStatus = localStorage.getItem('auth')
    ? JSON.parse(localStorage.getItem('auth')!)
    : null;

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  postTodo(todo: Todo) {
    return this.http.post<Todo>(this.url, todo);
  }

  patchTodo(todo: Todo) {
    return this.http.patch<Todo>(this.url, todo);
  }

  getSingleTodo(date: number): Observable<Todo> {
    return this.http.get<Todo>(`${this.url}/details/${date}`);
  }

  deleteTodo(date: number) {
    return this.http.delete<Todo>(`${this.url}/details/${date}`);
  }

  loginSend(login: Login): Observable<LoginInfo> {
    return this.http.post<LoginInfo>('http://localhost:3000/auth/login', login);
  }

  registrationSend(reg: { fullname: string; email: string; password: string }) {
    return this.http.post('http://localhost:3000/auth/registration', reg);
  }
}
