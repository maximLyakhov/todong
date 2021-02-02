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

  authApproved;

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

  loginSend(loginJson: Login) {
    return this.http
      .post('http://localhost:3000/login', loginJson)
      .subscribe((res) => {
        this.authApproved = res;
      });
  }
}
