import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BankaccountService } from 'src/app/services/bankaccount.service';


@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit {
   
  form: any = {
    "accountNumber": " ",
    depositAmount: null

  };
  isSuccessful = false;
  isDepositFailed = false;
  errorMessage = '';
  
 


  constructor(
    private formBuilder: FormBuilder,
    private bankaccountService: BankaccountService,
    private bottomSheetRef: MatBottomSheetRef<DepositComponent>
 
   ) { }


   ngOnInit() {
    this.form = this.formBuilder.group({
      accountNumber: ['', Validators.required],
      accountType: ['', Validators.required],
    });
  }



   
  onSubmit(){

    const {accountNumber, depositAmount} = this.form;

    this.bankaccountService.adminDeposit(accountNumber,depositAmount ).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isDepositFailed = false;
      }
    });

    console.log('User: ', this.form);
    this.bottomSheetRef.dismiss();
  } 


  


}
  function deposit() {
    throw new Error('Function not implemented.');
  }

function depositAmount(accountNumber: any, depositAmount: any) {
  throw new Error('Function not implemented.');
}

