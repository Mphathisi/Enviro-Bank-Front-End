import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenStorageService } from '../../services/token-storage.service';
import {Bankaccount} from '../../models/bankaccount'
import {User} from '../../models/user'
import { BankaccountService} from '../../services/bankaccount.service'
import {AuthService} from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  

  form: any = {
    fromAccountNumber: '',
    toAccountNumber: '',
    amount: null
  };

  isSuccessful: boolean = false;
  isDepositFailed: boolean = false;
  errorMessage: string = '';


  constructor(
     private router:Router,
     private bankaccountService : BankaccountService, 
     private service: AuthService,
     private userService: UserService,
     private route: ActivatedRoute, 
     
     ) {}

  ngOnInit(): void {
   
  }


  depositToSameAccount() {
    
    const {fromAccountNumber, toAccountNumber, amount} = this.form;
    this.bankaccountService.depositToSameUserAccount(fromAccountNumber, toAccountNumber , amount).subscribe(
      data => {
        this.isSuccessful = true;
        this.isDepositFailed = false;
        console.log("fromAccountNumber", fromAccountNumber);
        console.log("toAccountNumber", toAccountNumber);
        console.log("amount", amount);
        this.alertDepositSuccessful(amount, fromAccountNumber, toAccountNumber);
        this.errorMessage = '';
       this.router.navigate(['/home']);
      }
      , error => {
        this.isSuccessful = false;
        this.isDepositFailed = true;
        this.alertDepositFailed(error.error.message);
        this.errorMessage = error.error.message;
      }
    );
  }

  alertDepositSuccessful(amount: number , fromAccountNumber: string , toAccountNumber: string) {
    Swal.fire({
      title: 'Deposit Successful',
      text: 'You have deposited ' + amount + ' to account ' + toAccountNumber,
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
  alertDepositFailed(errorMessage: string) {
    Swal.fire({
      title: 'Deposit Failed',
      text: errorMessage,
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }


    

}
