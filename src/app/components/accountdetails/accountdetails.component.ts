import { Component, OnInit } from '@angular/core';

import {Bankaccount} from '../../models/bankaccount'
import {User} from '../../models/user'
import { BankaccountService} from '../../services/bankaccount.service'
import {AuthService} from '../../services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';


@Component({
  selector: 'app-accountdetails',
  templateUrl: './accountdetails.component.html',
  styleUrls: ['./accountdetails.component.scss']
})
export class AccountdetailsComponent implements OnInit {

  id!: number;
  bankaccount!: Bankaccount;

  constructor(
    private bankaccountService : BankaccountService, 
    private route: ActivatedRoute

    ) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.bankaccount = new Bankaccount();
      console.log(this.id);

  
      this.bankaccountService.accountDetails(this.id).subscribe(bankaccount => {
        this.bankaccount = bankaccount;
      });
    }
}
