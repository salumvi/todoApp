import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { filtroValidos, setFiltro } from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: filtroValidos = 'todos';
  filtros: filtroValidos[] = ['todos','pendientes','completados'];
  pendientes: number = 0;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(
      store =>{
      this.filtroActual = store.filtro;
      this.pendientes = store.todos.filter(todo => !todo.completado).length;
      });
    }
  cambiarFiltro(filtro: filtroValidos){
    
    this.store.dispatch(setFiltro({filtro: filtro}))
  }

  limpiarCompletados(){
    this.store.dispatch(limpiarCompletados());
  }

}
