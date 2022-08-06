import { Component, OnInit } from '@angular/core';
import {MatDialog , MatDialogRef} from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newclient',
  templateUrl: './newclient.component.html',
  styleUrls: ['./newclient.component.scss']
})
export class NewclientComponent implements OnInit {


  form: any = {
    name: null,
    surname:null,
    idNumber:null,
    email: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

 
  constructor(   private formBuilder: FormBuilder , 
    private authService: AuthService,
    private _bottomSheetRef: MatBottomSheetRef<NewclientComponent>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

 
  onSubmit(){

    const {name, surname, idNumber, email} = this.form;

    this.authService.register(name, surname, idNumber, email).subscribe({
      next: data => {
        this.alertNewClientAdded();
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.alertFailed();
        this.isSignUpFailed = true;
      }
    });
    console.log('User: ', this.form);
    this._bottomSheetRef.dismiss();
  } 

  
  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      idNumber: ['', Validators.required],
      email: ['', Validators.required]
    });
    
  }

  alertNewClientAdded(){
    Swal.fire({
      title: 'New Client Added',
      text: 'New Client has been added successfully',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
  alertFailed(){
    Swal.fire({
      title: 'Failed',
      text: 'Failed to add new client',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
  
    


  



}
