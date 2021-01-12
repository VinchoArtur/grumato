import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppGrumatoState} from '../../../store/app-grumato.state';
import {Router} from '@angular/router';
import {HttpService} from '../../../services/http.service';
import {NbToastrService} from '@nebular/theme';
import {map, switchMap} from 'rxjs/operators';
import {EEditorActions, GetCustomers, GetOrders, GetUsers, SaveCustomers, SaveOrders, SaveUsers, UsersLoaded} from '../components.action';
import {UsersEntry} from '../../component-models/users-model/user.model';
import {of} from 'rxjs';

@Injectable()
export class DataEffect {



  constructor(private actions$: Actions,
              private store: Store<AppGrumatoState>,
              private router: Router,
              private httpService: HttpService,
              private toasterService: NbToastrService) {
  }


  @Effect({dispatch: false})
  getCustomer$ = this.actions$.pipe(
    ofType<GetCustomers>(EEditorActions.GetCustomers),
    map((action) => {
      this.httpService.getCustomers(action.payload);
    })
  );

  @Effect({dispatch: false})
  addCustomer$ = this.actions$.pipe(
    ofType<SaveCustomers>(EEditorActions.SaveCustomers),
    map((action) => {
      this.httpService.postCustomer(action.payload);
    })
  );

  @Effect({dispatch: false})
  getOrders$ = this.actions$.pipe(
    ofType<GetOrders>(EEditorActions.GetOrders),
    map((action) => {
      this.httpService.postOrders(action.payload);
    })
  );

  @Effect({dispatch: false})
  addOrders$ = this.actions$.pipe(
    ofType<SaveOrders>(EEditorActions.SaveOrders),
    map((action) => {
      this.httpService.postOrders(action.payload);
    })
  );

  @Effect({dispatch: false})
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EEditorActions.GetUsers),
    map((action) => {
      this.httpService.getUsers(action.payload);
    })
    // switchMap(() => this.httpService.getUsers(this.users)),
    // switchMap((users: UsersEntry[]) => of(
    //   new UsersLoaded(users)
    // ))
  );

  @Effect({dispatch: false})
  addUsers$ = this.actions$.pipe(
    ofType<SaveUsers>(EEditorActions.SaveUsers),
    map((action) => {
      this.httpService.postUsers(action.payload);
    })
  );
}
