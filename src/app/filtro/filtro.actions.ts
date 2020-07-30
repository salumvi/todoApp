import { createAction, props } from '@ngrx/store';


export type filtroValidos= 'todos'|'completados'|'pendientes';

export const setFiltro = createAction(
    '[FILTRO] Set Filtro',
    props<{filtro: filtroValidos}>()
);