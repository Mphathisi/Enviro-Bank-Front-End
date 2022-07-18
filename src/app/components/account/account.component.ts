import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  currentUser: any;

  BankAccount = {
    accountNumber: '123456789',
    bankAccountType: 'Savings',
    bankAccountStatus: 'Active',
    availableBalance: 'R100,000',
    latestBalance: 'R100,000',
   
  }


  constructor(private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

}
