import { Injectable } from '@angular/core';
import { Prototodo } from './prototodo';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos = []
  pickedTodo: Todo;

  getTodos () {
    this.todos = JSON.parse(localStorage.getItem('storage')) || [];
    return this.todos
  }

  pushTodo (val: Prototodo) {
    let datedTodo = {
      title: val.title,
      description: val.description,
      date: Date.now(),
      done: false
    }
    this.todos.push(datedTodo)
    localStorage.setItem('storage', JSON.stringify(this.todos))
  }

  deleteTodo (val: Prototodo) {
    let index = this.todos.findIndex(x => val === x)
    this.todos.splice(index, 1)
    this.localStorageSetItem()
  }

  localStorageSetItem() {
    localStorage.setItem('storage', JSON.stringify(this.todos))
    this.todos = JSON.parse(localStorage.getItem('storage')) || [];
  }
}