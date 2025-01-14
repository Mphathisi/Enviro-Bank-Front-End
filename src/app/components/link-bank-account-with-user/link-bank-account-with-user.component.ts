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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-link-bank-account-with-user',
  templateUrl: './link-bank-account-with-user.component.html',
  styleUrls: ['./link-bank-account-with-user.component.scss']
})
export class LinkBankAccountWithUserComponent implements OnInit {

  id!: number;
  
  user! :User;
  bankaccount!: Bankaccount;
  bankaccounts!: Bankaccount[];

  form: any = {
  userId: null ,
  accountNumber: "" 
  };
  isSuccessful = false;
  isAddAccoountFailed = false;
 

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
    this.getUser();
   
    console.log("id: " + this.id);
    
  }

  linkBankAccount(){
    this.userService.linkBankAccountWithUser(this.form.userId , this.form.accountNumber).subscribe( data => {
      console.log(data);
      this.isSuccessful = true;
      this.isAddAccoountFailed = false;
      this.alertSuccess(this.form.userId , this.form.accountNumber);
      this.router.navigate(['/details/' + this.id]);

    },
    err => {
      this.errorMessage = err.error.message;
      this.isAddAccoountFailed = true;
      this.alertFailed();
      console.log(this.errorMessage);
    });
  }


  getUser(){
    this.userService.getUser(this.id).subscribe( data => {
      this.user = data;
      console.log(this.user);});
  }

  alertSuccess(userId: number, accountNumber: string){
    Swal.fire({
      title: 'Success!',
      text: 'You have successfully linked the bank account with the user.',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
  alertFailed(){
    Swal.fire({
      title: 'Failed!',
      text: 'Failed to link the bank account with the user.',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }

  




}
