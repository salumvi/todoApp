import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';
import { filtroValidos } from '../../filtro/filtro.actions';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  todos: Todo[] = [];
  filtro: filtroValidos;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store
      .subscribe(({todos, filtro}) => {

        this.todos = todos;
        this.filtro = filtro;
      });
    // si se sale de esta páguina habría que cancelar la subscription.
  }

}
