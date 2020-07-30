import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtroValidos } from '../filtro/filtro.actions';

@Pipe({
  name: 'filtroTodos'
})
export class FiltroTodosPipe implements PipeTransform {

  transform(todos: Todo[], filtro: filtroValidos): Todo[] {
    console.log(todos);
    switch (filtro) {
      case 'completados':
       return  todos.filter(todo => todo.completado);
      case 'pendientes':
       return todos.filter(todo => !todo.completado);
      default:
        return todos;

    }

  }

}
