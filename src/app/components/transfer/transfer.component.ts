import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {Bankaccount} from '../../models/bankaccount'
import {User} from '../../models/user'
import { BankaccountService} from '../../services/bankaccount.service'
import {AuthService} from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {
  
  id!: number;
  accountNumber!: string;

  bankaccount: Bankaccount  = new Bankaccount();

  form: any = {
    "accountNumber": " ",
    depositAmount: null

  };
  isSuccessful = false;
  isDepositFailed = false;
  errorMessage = '';

  
  constructor(
    private formBuilder: FormBuilder , 
    private bankaccountService : BankaccountService, 
    private route: ActivatedRoute,
    private router: Router,
    ) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.bankaccountService.getBankAccountByUserId(this.id).subscribe(data => {
      this.bankaccount = data;
    }
    , error => console.log(error));


    this.bankaccountService.getBankAccountByAccountNumber(this.accountNumber).subscribe(data => {
      this.bankaccount = data;
    }
    , error => console.log(error));
    
}

  transfer(){ 
    this.bankaccountService.tranfer(this.id, this.bankaccount).subscribe(
      data => {
        this.isSuccessful = true;
        this.isDepositFailed = false;
        this.router.navigate(['/home']);
      }
      , (error: { error: { message: string; }; }) => {
        this.isSuccessful = false;
        this.isDepositFailed = true;
        this.errorMessage = error.error.message;
      }
    );
  }

    

}




    