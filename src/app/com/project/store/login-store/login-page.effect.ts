import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {AppGrumatoState} from '../app-grumato.state';
import {LoginPageActions, SignUpUser} from './login-page.actions';
import {map} from 'rxjs/operators';
import {HttpService} from '../../services/http.service';

@Injectable()
export class LoginPageEffect {



  @Effect({dispatch: false})
  signUpUser$ = this.actions$.pipe(
    ofType<SignUpUser>(LoginPageActions.SignUpUser),
    map((action) => {
      this.httpServie.signUpUserData(action.payload).subscribe(value => {
        if ( (value as {status: string, code: string}).status == 'success') {
          this.toastrService.success(
            'Done',
            'Creating'
          );
        } else {
          this.toastrService.danger(
            'Error',
            'Creating'
          );
        }
      });
    })
  );


  constructor(private actions$: Actions,
              private store: Store<AppGrumatoState>,
              private router: Router,
              private httpServie: HttpService,
              private toastrService: NbToastrService) {
  }
}
