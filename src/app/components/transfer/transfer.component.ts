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


@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  currentUser: any;
  
  id!: number;
  accountNumber!: string;

  bankaccount: Bankaccount  = new Bankaccount();
  currentBankAccount!: Bankaccount;
  currentBankAccouts: Bankaccount[] = [];



  form: any = {
    amount: null
  };
  isSuccessful = false;
  isDepositFailed = false;
  errorMessage = '';

  
  constructor(
    private formBuilder: FormBuilder , 
    private bankaccountService : BankaccountService,
    private authService: AuthService,
    private userService: UserService,
  
    private token: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
    ) {}
  
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.currentUser = this.token.getUser();
    
    //login current bankAccount 
    this.currentBankAccouts = this.token.getUser().bankAccounts;
    this.currentBankAccouts.forEach(currentBankAccount => {
      this.currentBankAccount = currentBankAccount;
    }
    );



    this.bankaccountService.getBankAccountByUserId(this.id).subscribe(data => {
      this.bankaccount = data;
    }
    , error => console.log(error));


    this.bankaccountService.getBankAccountByAccountNumber(this.accountNumber).subscribe(data => {
      this.bankaccount = data;
    }
    , error => console.log(error));
    
}

deposit() {
  const {amount} = this.form;
  console.log(this.currentUser.accountNumber);
  this.bankaccountService.depositToDifferentUserAccount(this.currentBankAccount.accountNumber, this.bankaccount.accountNumber, amount).subscribe(
    data => {
      this.isSuccessful = true;
      this.isDepositFailed = false;
      alert('Deposit successful' + "amount: " + amount);

      this.errorMessage = '';
     // this.router.navigate(['/bankaccount']);
    }
    , error => {
      this.isSuccessful = false;
      this.isDepositFailed = true;
      alert(error.error.message);
      this.errorMessage = error.error.message;
    }
  );

  }
  
}




    