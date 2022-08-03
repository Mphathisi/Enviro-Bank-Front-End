import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';
import { Bankaccount } from 'src/app/models/bankaccount';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-user-appointment',
  templateUrl: './user-appointment.component.html',
  styleUrls: ['./user-appointment.component.scss']
})
export class UserAppointmentComponent implements OnInit {

  form: any = {
    amount: null,
    accountNumber: '',
    accountType: '',
    message: '',
    email:  '',
  };

  currentUser: any;

  isSuccessful = false;
  errorMessage = '';

  constructor(
    private _formBuilder: FormBuilder,
  
    private authService: AuthService,
    private appointmentService: AppointmentService,
    private token: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
    ) {}


  ngOnInit(): void {

  }

  makeAppointment() : void {
    this.appointmentService.newAppointment(this.form).subscribe(
      data => {
        this.isSuccessful = true;
        alert('Appointment made successfully');
        this.router.navigate(['/home']);
      },
      err => {
        this.errorMessage = err.error.message;
        alert(this.errorMessage);
        this.isSuccessful = false;
      }
    );
  }
}

  
