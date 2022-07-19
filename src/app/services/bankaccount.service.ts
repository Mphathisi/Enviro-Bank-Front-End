import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Bankaccount } from '../models/bankaccount';


@Injectable({
  providedIn: 'root'
})
export class BankaccountService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }
  
  getAccountList(): Observable<Bankaccount[]>{
    return this.httpClient.get<Bankaccount[]>(`${this.baseURL}/beneficiaries`);
  }

  newBankAccount(bankAccount: Bankaccount): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/newBankAccount`, bankAccount);
  }

  accountDetails(id: number): Observable<Bankaccount>{
    return this.httpClient.get<Bankaccount>(`${this.baseURL}/beneficiaries/${id}`);
  }
  getBankAccountByAccountNumber(accountNumber: string): Observable<Bankaccount>{
    return this.httpClient.get<Bankaccount>(`${this.baseURL}/beneficiaries/${accountNumber}`);
  }


  adminDeposit(accountNumber: string, depositAmount:number): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/adminDeposit`, {accountNumber, depositAmount});
  }

  deposioDifferentAccount(senderAccountNo: string, receiverAccountNo:string , amount: number): Observable<any> {
    return this.httpClient.post(`${this.baseURL}/deposit`, {senderAccountNo, receiverAccountNo, amount});
  }

  tranfer(id: number, bankAccount: Bankaccount): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}/transfer`, bankAccount);
  }


  linkBankAccountWithUser(id : number, accountNumber: string): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/users/${id}/linkBankAccount`, {accountNumber});
  }
  
  
  getBankAccountByUserId(id: number): Observable<Bankaccount>{
    return this.httpClient.get<Bankaccount>(`${this.baseURL}/beneficiaries/${id}`);
  }

  
  deposit(id: number, bankAccount: Bankaccount): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}/deposit`, bankAccount);
  }
  
  

}