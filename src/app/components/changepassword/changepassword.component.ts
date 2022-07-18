import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User} from '../../models/user'
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  currentUser: any;


  form: any = {
    password: null,
    newpassword: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  
 
  constructor(   private formBuilder: FormBuilder , 
    private authService: AuthService,
    private token: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
    ) {}


  onSubmit() {
    const {password, newpassword} = this.form;
    this.authService.changePassword(this.currentUser.email, password, newpassword).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
 
    console.log('User: ', this.form);
  }

  
  ngOnInit() {
    this.currentUser = this.token.getUser();
    
    console.log(this.currentUser);
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      newpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
    
  }
      

}
