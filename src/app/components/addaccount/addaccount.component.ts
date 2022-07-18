import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';
import { Bankaccount } from 'src/app/models/bankaccount';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { BankaccountService } from 'src/app/services/bankaccount.service';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.scss']
})
export class AddaccountComponent implements OnInit {

  id!: number;
  bankaccountId!: number;
  idNumber!: string;
  accountNumber! : string;
  user! :User;
  bankaccount!: Bankaccount;
  bankaccounts!: Bankaccount[];

  form: any = {
    accountType: '',
    availableBalance: null,
  };
  isSuccessful = false;
  isAddAccoountFailed = false;
  isDepositAmountValid(value: number): boolean {
    if (value > 0) {
      return true;
    } else {
      return false;
    }
  }

  errorMessage = '';

  constructor(
    private _formBuilder: FormBuilder,
    private bankaccountService: BankaccountService,
    private userService: UserService,
    private authService: AuthService,
    private token: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  
    ) {}

  

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.bankaccountId = this.route.snapshot.params['bankaccountId'];
    this.getUser();
    this.getBankAccounts();

    console.log("id: " + this.id);
    
  }

  addAccount(): void {
    this.bankaccountService.newBankAccount(this.form).subscribe( data => {
      console.log(data);
      this.isDepositAmountValid(this.form.depositAmount);
      this.isSuccessful = true;
      this.isAddAccoountFailed = false;
      alert("id: " + this.id);
      this.router.navigate(['/users/' + this.id+ '/bankaccounts']);
      
    },
    err => {
      this.errorMessage = err.error.message;
      this.isAddAccoountFailed = true;
      console.log(this.errorMessage);
    });
  }



  getUser(){
    this.userService.getUser(this.id).subscribe( data => {
      this.user = data;
      console.log(this.user);});
  }
  getBankAccounts(){
    this.bankaccountService.getAccountList().subscribe( data => {
      this.bankaccounts = data;
      console.log(this.bankaccounts);});
  }
  getBankAccount(){
    this.bankaccountService.accountDetails(this.bankaccountId).subscribe( data => {
      this.bankaccount = data;
      console.log(this.bankaccount);});
  }


}






