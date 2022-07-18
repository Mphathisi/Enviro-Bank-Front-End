import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { TransferComponent } from '../transfer/transfer.component';
import { AccountdetailsComponent } from '../accountdetails/accountdetails.component';
import { DepositComponent } from '../deposit/deposit.component';
import { NewclientComponent } from '../newclient/newclient.component';
import { ClientdetailsComponent } from '../clientdetails/clientdetails.component';
import { LoginComponent } from '../login/login.component';
import { AddaccountComponent } from '../addaccount/addaccount.component';

import {UserService} from '../../services/user.service';
import {User} from '../../models/user'
import { AuthService} from '../../services/auth.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Bankaccount } from "../../models/bankaccount";
import {BankaccountService} from "../../services/bankaccount.service";
import {TokenStorageService} from "../../services/token-storage.service";
import { BreakpointObserver } from '@angular/cdk/layout';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentUser: any;

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.userService.getUsers().subscribe( data => {
      this.users = data;
    }
    );
    this.id = this.route.snapshot.params['id'];
    this.userService.getUsers().subscribe( data => {
      this.users = data;
      console.log(this.users);
    } 
    );
  }

  users! : User[];
  id! :number;
  bankaccount! : Bankaccount;
  user : User |  undefined; 

  constructor(
    private _bottomSheet: MatBottomSheet,
     private router:Router,
     private userService: UserService,
    private route : ActivatedRoute,
    private token: TokenStorageService,
     private observer : BreakpointObserver,
    
     ) {}

   
     deposit(): void {
      this._bottomSheet.open(DepositComponent , { panelClass: 'custom-width' });
    }
   

   userDetails(id: number){
      this.router.navigate(['details', id]);
    }

    pay(id: number){
      this.router.navigate(['transfer', id]);
    }
   
  
   
    addClient(): void {
      this._bottomSheet.open(NewclientComponent, { panelClass: 'custom-width' });
    }

    addAccount(): void {
      this._bottomSheet.open(AddaccountComponent, { panelClass: 'custom-width' });
    }
  

}
