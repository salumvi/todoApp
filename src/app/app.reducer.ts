
import { Todo } from './todos/models/todo.model';
import { ActionReducerMap } from '@ngrx/store';
import { todoReducer } from './todos/todo.redcer';
import { filtroValidos } from './filtro/filtro.actions';
import { filtroReducer } from './filtro/filtro.reducer';


export interface AppState {
    todos: Todo[];
    filtro: filtroValidos;
    // mas propiedades a seguir...
}


export const appReducers: ActionReducerMap<AppState>={
    todos: todoReducer,
    filtro: filtroReducer

}