import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  NbButtonModule, NbCalendarModule,
  NbCardModule, NbDatepickerModule,
  NbDialogModule,
  NbInputModule,
  NbLayoutModule,
  NbRouteTabsetModule, NbSpinnerModule,
  NbThemeModule,
  NbToastrModule,
  NbToastrService, NbTreeGridModule
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
import { CustomersComponent } from './com/project/components/customers/customers.component';
import { OrdersComponent } from './com/project/components/orders/orders.component';
import { UsersComponent } from './com/project/components/users/users.component';
import {CreateCustomerComponent} from './com/project/components/add-data-modal-window/create-customer/create-customer.component';
import {CreateOrderComponent} from './com/project/components/add-data-modal-window/create-order/create-order.component';
import {CreateUserComponent} from './com/project/components/add-data-modal-window/create-user/create-user.component';
import {DataEffect} from './com/project/components/components-store/effets/data.effetc';
import {DpDatePickerModule} from 'ng2-date-picker';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginSignUpWindowComponent,
    GrumatoViewComponent,
    CustomersComponent,
    OrdersComponent,
    UsersComponent,
    CreateCustomerComponent,
    CreateOrderComponent,
    CreateUserComponent
],
  imports: [
    BrowserModule,
    DpDatePickerModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbDialogModule.forChild(),
    NbDatepickerModule.forRoot(),
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbSpinnerModule,
    NbCalendarModule,
    NbInputModule,
    NbButtonModule,
    NbTreeGridModule,
    StoreModule.forRoot(appReducers),
    NbToastrModule.forRoot(),
    EffectsModule.forRoot([LoginPageEffect, DataEffect])
  ],
  providers: [HttpService, NbToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
