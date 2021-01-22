import { Injectable, OnChanges } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnChanges {

  todos = []

  ngOnChanges () {
    localStorage.setItem('storage', JSON.stringify(this.todos))
    this.todos = JSON.parse(localStorage.getItem('storage')) || [];
  }

  getTodos () {
    this.todos = JSON.parse(localStorage.getItem('storage')) || [];
    return this.todos
  }

  pushTodo (val) {
    let datedTodo = {
      title: val.title,
      description: val.description,
      date: Date.now(),
      done: false
    }
    this.todos.push(datedTodo)
    this.localStorageSetItem()
  }

  deleteTodo (val) {
    let index = this.todos.findIndex(x => val === x)
    this.todos.splice(index, 1)
    this.localStorageSetItem()
  }

  localStorageSetItem () {
    localStorage.setItem('storage', JSON.stringify(this.todos))
  }
}