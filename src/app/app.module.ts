import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbDialogModule,
  NbInputModule,
  NbLayoutModule,
  NbRouteTabsetModule,
  NbThemeModule,
  NbToastrModule,
  NbToastrService
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthComponent} from './com/project/login/auth/auth.component';
import {HttpService} from './com/project/services/http.service';
import {StoreModule} from '@ngrx/store';
import {appReducers} from './com/project/store/app-reducers';
import {LoginSignUpWindowComponent} from './com/project/login/auth/login-sign-up-window/login-sign-up-window.component';
import {EffectsModule} from '@ngrx/effects';
import {LoginPageEffect} from './com/project/store/login-store/login-page.effect';
import {GrumatoViewComponent} from './com/project/components/grumato-view/grumato-view.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginSignUpWindowComponent,
    GrumatoViewComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbDialogModule.forChild(),
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbInputModule,
    NbButtonModule,
    StoreModule.forRoot(appReducers),
    NbToastrModule.forRoot(),
    EffectsModule.forRoot([LoginPageEffect])
  ],
  providers: [HttpService, NbToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
