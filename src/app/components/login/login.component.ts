import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User} from '../../models/user'
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  uploading = true;
  sending = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  constructor(private authService: AuthService, 
    private tokenStorage: TokenStorageService ,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void {

    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        
        this.isLoginFailed = false;
        this.sending = true;
        this.isLoggedIn = true;
        this.alertLoginSuccess();
        this.roles = this.tokenStorage.getUser().roles;
          for (const x of this.roles) {
                if(x =="Admin"){
                  this.router.navigateByUrl("/admin")
                }
                else if(x == "User"){
                  this.router.navigateByUrl("/home")
                }
          }
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.alertLoginFailed();
        this.isLoginFailed = true;
      }
      
    });
  }

  alertLoginSuccess(): void {
    Swal.fire({
      title: 'Login Successful',
      text: 'You have successfully logged in',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }

  alertLoginFailed(): void {
    Swal.fire({
      title: 'Login Failed',
      text: 'You have entered an invalid username or password',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }


  valCheck: string[] = ['remember'];


 

}
