import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewclientComponent } from './components/newclient/newclient.component';
import { AccountdetailsComponent } from './components/accountdetails/accountdetails.component';
import { ClientdetailsComponent } from './components/clientdetails/clientdetails.component';
import { AddaccountComponent } from './components/addaccount/addaccount.component';
import { AccountComponent } from './components/account/account.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { TransferComponent } from './components/transfer/transfer.component';
import { RoleComponent } from './components/role/role.component';
import { LinkBankAccountWithUserComponent } from './components/link-bank-account-with-user/link-bank-account-with-user.component';
import { LinkRoleComponent } from './components/link-role/link-role.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'newclient', component: NewclientComponent},
  {path: 'home', component: HomeComponent},
  {path: 'transfer/:id', component: TransferComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'account', component: AccountComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'details/:id', component: ClientdetailsComponent},
  {path: 'accountDetails/:id', component: AccountdetailsComponent},
  {path: 'changePassword', component: ChangepasswordComponent},
  {path: 'addaccount/:id', component: AddaccountComponent},
  {path: 'roles', component: RoleComponent},
  {path: 'users/:id/bankaccounts', component: LinkBankAccountWithUserComponent},
  {path: 'role/:id', component: LinkRoleComponent},
  {path: '**', redirectTo: 'login'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
