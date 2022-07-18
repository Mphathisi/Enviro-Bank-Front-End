import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { AddaccountComponent } from '../addaccount/addaccount.component';


import { User} from '../../models/user'
import {Bankaccount } from '../../models/bankaccount'
import { AuthService } from 'src/app/services/auth.service';
import { BankaccountService } from 'src/app/services/bankaccount.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss']
})
export class ClientdetailsComponent implements OnInit {

  id!: number;
  user! :User;
  bankaccount!: Bankaccount;
  bankAccounts!: Bankaccount[];


  constructor(
    private _bottomSheet: MatBottomSheet,
     private router:Router,
     private bankaccountService : BankaccountService, 
     private service: AuthService,
     private userService: UserService,
     private route: ActivatedRoute, 
     
     ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.user = new User();

    this.userService.getUser(this.id).subscribe( data => {
      this.user = data;
      console.log(this.user);});

      this.bankaccountService.getBankAccountByUserId(this.id).subscribe( data => {
        this.bankaccount = data;
        console.log(this.bankaccount);}
        , error => {
          console.log(error);
        }
        );

  }

  createBankAccount(id : number){
    this.router.navigate(['addaccount', id]);
  }

  me(id : number){
    this.router.navigate(['addaccount', id]);
  }





}
