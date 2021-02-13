import {AppGrumatoState} from '../../store/app-grumato.state';
import {createSelector} from '@ngrx/store';
import {DataState} from './data.state';
import {DataModel} from "../component-models/data-model/data-model";

const selectEditor = (state: AppGrumatoState) => state.data;

export const selectData = createSelector(
  selectEditor,
  (state: DataState) => state
);

export const selectOrders =
  createSelector(selectEditor, (state: DataState) => state.data.orders);

export const selectCustomers =
  createSelector(selectEditor, (state: DataState) => state.data.customers);

