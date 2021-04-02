
import { TodoService } from './todo.service'
import {OnInit} from '@angular/core';

export class TodosComponent implements OnInit{

  todos: any[] = [];
  message: string;

  constructor(private service: TodoService) {
  }

  ngOnInit() {
    this.service.getTodos().subscribe(t => this.todos = t);
  }

  add() {
    const newTodo = '...';
    this.service.addTodos(newTodo).subscribe(t => this.todos.push(t),
      err => this.message = err);
  }

  delete(id: number) {
    if (confirm('Are you sure?')) {
      this.service.delete(id);
    }
  }
}
