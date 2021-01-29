import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class BackService {
  url = 'http://localhost:3000/todos';

  kek;

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]>  {
    return this.http.get<Todo[]>(this.url)
  }
  
  postTodo(todo: Todo) {
    return this.http.post<Todo>(this.url, todo)
  }

  deleteTodo(todo: Todo) {
  }

  getSingleTodo(date) {
    return this.http.get(`${this.url}/details/${date}`);
  }
}
