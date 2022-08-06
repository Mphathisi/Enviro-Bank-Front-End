import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL = "https://envirobank.herokuapp.com";


  constructor(private httpClient: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseURL}/users`);
  }
  
  getUserById(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/users/${id}`);
  }
  getUser(id: number): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/users/${id}`);
  }
  addRoles(name: string):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/role`,{});
  }

  linkBankAccountWithUser(userId : number, accountNumber: string): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/users/linkBankAccount`, {userId, accountNumber});
  }
  

  getUserByIDNumber(idNumber: string): Observable<User>{
    return this.httpClient.get<User>(`${this.baseURL}/users/${idNumber}`);
  }
   
  
  deleteUser(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
