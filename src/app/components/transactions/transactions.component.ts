import { Component, OnInit } from '@angular/core';
import {Bankaccount} from '../../models/bankaccount'
import {User} from '../../models/user'
import { BankaccountService} from '../../services/bankaccount.service'
import {AuthService} from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BankStatements } from 'src/app/models/bankStatements';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  id!: number;
  bankaccount!: Bankaccount;
  bankAccounts!: Bankaccount[];

  bankStatements! : BankStatements[];
  bankStatement! : BankStatements;


  constructor(
     private router:Router,
  
     private bankaccountService : BankaccountService, 
     private route: ActivatedRoute, 
     
     ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.bankaccount = new Bankaccount();


      this.bankaccountService.getBankAccountByUserId(this.id).subscribe( data => {
        this.bankaccount = data;
        console.log(this.bankaccount);}
        , error => {
          console.log(error);
        }
      );

      this.bankaccountService.bankStatements(this.id).subscribe( data => {
        this.bankStatement = data;
        console.log(this.bankStatements);}
        , error => {

          console.log(error);
        }

      );


  }
  

}
