import { Injectable , Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logout() {
    throw new Error('Method not implemented.');
  }

  getToken() {  
    return localStorage.getItem('access_token');
  }
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
       email,
      password
    }, httpOptions);
  }

  changePassword(email: string, oldPassword: string, newPassword: string): Observable<any> {
    return this.http.put(AUTH_API + 'changePassword', {
      email,
      oldPassword,
      newPassword
    }, httpOptions);
  }


  register(name: string,  surname: string, idNumber:string , email: string): Observable<any> {
    return this.http.put(AUTH_API + 'register', {
      name,
      surname,
      idNumber,
      email,
    }, httpOptions);
  }

}
