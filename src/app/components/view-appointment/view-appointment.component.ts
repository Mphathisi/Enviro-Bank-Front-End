import { Component, OnInit } from '@angular/core';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html',
  styleUrls: ['./view-appointment.component.scss']
})
export class ViewAppointmentComponent implements OnInit {

  id!: number;
  appointment!: Appointment;


  constructor(
    private appointmentService: AppointmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { } 
    

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.appointmentService.getAppointmentById(this.id).subscribe(appointment => {
      this.appointment = appointment;
    }
    );

  }


}
