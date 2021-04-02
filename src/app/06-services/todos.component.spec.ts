import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import {Observable, Subscriber, of, EMPTY} from 'rxjs';
import {error} from '@angular/compiler/src/util';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);

  });

  it('should set todo property with the items returned from server', () => {
    const teams = [1, 2, 3];
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.create((obs: Subscriber<any>) => {
        obs.next(teams);
        obs.complete();
      });
    });
    component.ngOnInit();
    expect(component.todos).toBe(teams);
  });

  it('should call the server to save the changes when a new to do item added', () => {
    const spy = spyOn(service, 'addTodos').and.callFake( () => {
      return Observable.create((obs: Subscriber<any>) => {
        obs.next(null);
        obs.complete();
      });
    });
    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should add new todo from server', () => {
    const todo = 14;
    spyOn(service, 'addTodos').and.callFake( () => {
      return Observable.create((obs: Subscriber<any>) => {
        obs.next(todo);
        obs.complete();
      });
    });
    component.add();
    expect(component.todos).toContain(todo);
  });

  it('should set message property if server return error', () => {
    const errorMessage = 'error from server';
    spyOn(service, 'addTodos').and.callFake( () => {
      return Observable.create((obs: Subscriber<any>) => {
        throw obs.error(errorMessage);
      });
    });
    component.add();
    expect(component.message).toBe(errorMessage);
  });
});
