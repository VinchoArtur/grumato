import {AppGrumatoState} from '../../store/app-grumato.state';
import {createSelector} from '@ngrx/store';
import {DataState} from './data.state';
import {UsersEntry} from '../component-models/users-model/user.model';

const selectEditor = (state: AppGrumatoState) => state.dataState;

export const selectUsers =
  createSelector(selectEditor, (state: DataState) => state.user);
