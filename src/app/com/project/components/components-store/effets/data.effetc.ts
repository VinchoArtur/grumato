import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppGrumatoState} from '../../../store/app-grumato.state';
import {Router} from '@angular/router';
import {HttpService} from '../../../services/http.service';
import {map} from 'rxjs/operators';
import {
  EEditorActions,
  GetAllDataLoad,
  GetAllDataLoaded,
  GetCustomers,
  GetOrders,
  GetUsers,
  SaveCustomers,
  SaveOrders,
  SaveUsers
} from '../components.action';
import {BaseResponse} from "../../users/users.component";
import {DataState} from "../../components-state/data.state";

@Injectable()
export class DataEffect {


  constructor(private actions$: Actions,
              private store: Store<AppGrumatoState>,
              private router: Router,
              private httpService: HttpService) {
  }


  @Effect({dispatch: false})
  getCustomer$ = this.actions$.pipe(
    ofType<GetCustomers>(EEditorActions.GetCustomers),
    map((action) => {
      this.httpService.getCustomers();
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
      this.httpService.getOrders();
    })
  );

  @Effect({dispatch: false})
  addOrders$ = this.actions$.pipe(
    ofType<SaveOrders>(EEditorActions.SaveOrders),
    map((action) => {
      this.httpService.postOrders(action.payload).subscribe(value => {
        console.log(value);
        this.store.dispatch(new GetAllDataLoad());
      });
    }));

  @Effect({dispatch: false})
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EEditorActions.GetUsers),
    map((action) => {
      this.httpService.getUsers();
    })
  );

  @Effect({dispatch: false})
  addUsers$ = this.actions$.pipe(
    ofType<SaveUsers>(EEditorActions.SaveUsers),
    map((action) => {
      this.httpService.postUsers(action.payload);
    })
  );

  @Effect({dispatch: false})
  getAllData$ = this.actions$.pipe(
    ofType<GetAllDataLoad>(EEditorActions.GetAllDataLoad),
    map((action) => {
      this.httpService.getAllData().subscribe(response => {
        let data = JSON.parse((response as BaseResponse).status);
        let result: DataState = {
          data: {
            users: data.employees,
            orders: data.orders,
            customers: data.customer
          }
        };
        if (result)
          this.store.dispatch(new GetAllDataLoaded(result))
      });
    })
  )
}
