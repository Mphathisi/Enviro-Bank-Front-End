import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Route } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-appointments',
  templateUrl: './admin-appointments.component.html',
  styleUrls: ['./admin-appointments.component.scss']
})
export class AdminAppointmentsComponent implements OnInit {

  id!: number;

  appointment!: Appointment;
  appointments: Appointment[] = [ ];
  

  
  constructor(
    private router:Router,
    private appointmentService : AppointmentService,
    private route: ActivatedRoute, 
    ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.appointmentService.getAppointmentById(this.id).subscribe( data => {
      this.appointment = data;
      console.log(this.appointments);}
      , error => {
        console.log(error);
      }
    );
    this.appointmentService.getAppointments().subscribe( data => {
      this.appointments = data;
      console.log(this.appointments);}
      , error => {
        console.log(error);
      }
    );
  }

  viewAppointment(id: number) {
    this.router.navigate(['/appointmentDetails/' + id]);
  }





}
