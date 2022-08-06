import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { NewclientComponent } from './components/newclient/newclient.component';
import { HomeComponent } from './components/home/home.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { AccountdetailsComponent } from './components/accountdetails/accountdetails.component';
import { AccountComponent } from './components/account/account.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';
import { AdminComponent } from './components/admin/admin.component';
import { DepositComponent } from './components/deposit/deposit.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';



import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';


import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatTabsModule} from '@angular/material/tabs';
import {MatBadgeModule} from '@angular/material/badge';
import { AddaccountComponent } from './components/addaccount/addaccount.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';

import {MatStepperModule} from '@angular/material/stepper';



import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AuthService } from './services/auth.service';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { RoleComponent } from './components/role/role.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { PaymentComponent } from './components/payment/payment.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { LinkBankAccountWithUserComponent } from './components/link-bank-account-with-user/link-bank-account-with-user.component';
import { LinkRoleComponent } from './components/link-role/link-role.component';
import { UserAppointmentComponent } from './components/user-appointment/user-appointment.component';
import { AdminAppointmentsComponent } from './components/admin-appointments/admin-appointments.component';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewclientComponent,
    HomeComponent,
    TransferComponent,
    AccountdetailsComponent,
    AccountComponent,
    ClientdetailsComponent,
    AdminComponent,
    DepositComponent,
    HeaderComponent,
    FooterComponent,
    AddaccountComponent,
    TransactionsComponent,
    ChangepasswordComponent,
    RoleComponent,
    PaymentComponent,
    BackButtonComponent,
    LinkBankAccountWithUserComponent,
    LinkRoleComponent,
    UserAppointmentComponent,
    AdminAppointmentsComponent,
    ViewAppointmentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    LayoutModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatBadgeModule,
    MatStepperModule,
    HttpClientModule,
    SweetAlert2Module
  ],

  entryComponents: [
    NewclientComponent
],

  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
    TransferComponent,
    DepositComponent,
    authInterceptorProviders,
    NewclientComponent,
    AuthService,
    authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
