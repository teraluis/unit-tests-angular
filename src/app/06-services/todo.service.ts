
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export class TodoService {
  constructor(private http: HttpClient) {
  }

  getTodos(): Observable<any> {
    return this.http.get('...').pipe();
  }

  addTodos(newTodo: string): Observable<any> {
    return this.http.post('...', {todo: newTodo}).pipe();
  }

  delete(id: number): Observable<any> {
    return this.http.delete('/' + id).pipe();
  }
}
