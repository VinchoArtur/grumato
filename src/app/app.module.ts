import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {NbThemeModule, NbLayoutModule, NbCardModule, NbRouteTabsetModule, NbInputModule, NbButtonModule} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AuthComponent } from './com/project/login/auth/auth.component';
import {HttpService} from './com/project/services/http.service';
import {StoreModule} from "@ngrx/store";
import {appReducers} from "./com/project/store/app-reducers";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbInputModule,
    NbButtonModule,
    StoreModule.forRoot(appReducers)
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
