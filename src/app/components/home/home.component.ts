import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { TransferComponent } from '../transfer/transfer.component';
import { AccountdetailsComponent } from '../accountdetails/accountdetails.component';

import {Bankaccount} from '../../models/bankaccount'
import {User} from '../../models/user'
import { BankaccountService} from '../../services/bankaccount.service'
import {AuthService} from '../../services/auth.service'
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users : any;
  user : User | undefined;

  bankaccount: Bankaccount | undefined;

  bankaccounts!: Bankaccount[]

    constructor(
      private _bottomSheet: MatBottomSheet,
      private bankaccountService: BankaccountService,
      private service: AuthService,
      private userService: UserService,
      private router: Router
    ) { }
     
    ngOnInit(): void {
      this.userService.getUsers().subscribe(users => {
        this.users = users;
      });
  
      this.bankaccountService.getAccountList().subscribe(bankaccounts => {
        this.bankaccounts = bankaccounts;
      });
    }

    logout(): void {
      this.service.logout();
      this.router.navigate(['/login']);
    }

    transfer(id: number){
      this.router.navigate(['transfer', id]);
    }


    accountDetails(id: number){
      this.router.navigate(['accountDetails', id]);
    }

 

}
