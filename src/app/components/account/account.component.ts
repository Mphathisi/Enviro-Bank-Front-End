import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankaccountService } from 'src/app/services/bankaccount.service';
import { Bankaccount } from 'src/app/models/bankaccount';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  currentUser: any;
  roles: Role[] = [];
  role! : Role;

  
  bankaccounts: Bankaccount[] = [];
  bankaccount!: Bankaccount;

  user: User = new User();
  users: User[] = [];

  constructor(
    private token: TokenStorageService,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private bankAccountService: BankaccountService,
    private userService: UserService
  ) { }
    

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
   
    
    this.roles = this.token.getUser().roles;
    this.roles.forEach(role => {
      this.role = role;
    });

    this.bankaccounts = this.token.getUser().bankAccounts;
    this.bankaccounts.forEach(bankaccount => {
      this.bankaccount = bankaccount;
    });

   
    this.getUsers();
    this.getUser();
    


    
  }



  //users
  getUsers() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
      }
    );
  }
  //users end

  getUser() {
    this.userService.getUser(this.currentUser.id).subscribe(
      data => {
        this.user = data;
      }
    );
  }


}

 


