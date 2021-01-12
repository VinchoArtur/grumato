import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {NbToastrService} from '@nebular/theme';
import {AppGrumatoState} from '../app-grumato.state';
import {LoginPageActions, LoginUser, SignUpUser} from './login-page.actions';
import {map} from 'rxjs/operators';
import {HttpService} from '../../services/http.service';

@Injectable()
export class LoginPageEffect {



  constructor(private actions$: Actions,
              private store: Store<AppGrumatoState>,
              private router: Router,
              private httpService: HttpService,
              private toasterService: NbToastrService) {
  }

  @Effect({dispatch: false})
  signUpUser$ = this.actions$.pipe(
    ofType<SignUpUser>(LoginPageActions.SignUpUser),
    map((action) => {
      this.httpService.signUpUserData(action.payload).subscribe(value => {
        if ( (value as {status: string, code: string}).status == 'success') {
          this.toasterService.success(
            'Done',
            'Creating'
          );
        } else {
          this.toasterService.danger(
            'Error',
            'Creating'
          );
        }
      });
    })
  );

  @Effect({dispatch: false})
  signInUser$ = this.actions$.pipe(
    ofType<LoginUser>(LoginPageActions.Login),
    map((action) => {
      this.httpService.signInUserData(action.payload).subscribe(value => {
        if ( (value as {status: string, code: string}).status == 'true') {
          this.router.navigate(['/view']);
        } else {
          this.toasterService.danger(
            'Error',
            'Authorisation'
          );
        }
      });
    })
  );
}
