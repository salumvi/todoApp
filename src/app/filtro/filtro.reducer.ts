import { createReducer, on } from '@ngrx/store';
import { filtroValidos, setFiltro } from './filtro.actions';

export const estadoInicial: filtroValidos = 'todos';



const _filtroReducer = createReducer(estadoInicial,

    // se crea un objeto nuevo, no se realiza un push
    on( setFiltro, ( state, { filtro } ) => filtro),


);

export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
  }







