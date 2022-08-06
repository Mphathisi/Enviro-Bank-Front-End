import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  
  private baseURL = "https://envirobank.herokuapp.com/api/v1";

  constructor(private httpClient: HttpClient) { }

  newAppointment(appointment: Appointment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/newAppointment`, appointment);
  }
  getAppointmentById(id: number): Observable<Appointment>{
    return this.httpClient.get<Appointment>(`${this.baseURL}/appointment/${id}`);
  }
 
  getAppointments(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}/getAppointments`);
  }


}
