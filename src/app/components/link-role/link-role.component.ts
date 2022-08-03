import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {Router, ActivatedRoute} from '@angular/router';
import {User} from '../../models/user';
import { Bankaccount } from 'src/app/models/bankaccount';
import {AuthService} from '../../services/auth.service';
import {TokenStorageService} from '../../services/token-storage.service';
import { UserService } from 'src/app/services/user.service';
import { RoleService } from 'src/app/services/role.service';


@Component({
  selector: 'app-link-role',
  templateUrl: './link-role.component.html',
  styleUrls: ['./link-role.component.scss']
})
export class LinkRoleComponent implements OnInit {

  id!: number;
  roles : any;
  role : any;

  form: any = {
    userId: null ,
    roleId: null,
  };

  user! :User;
  isSuccessful = false;
  errorMessage = '';

  constructor(
    private _formBuilder: FormBuilder,
    private userService: UserService,
    private roleService: RoleService,
    private authService: AuthService,
    private token: TokenStorageService,
    private router: Router,
    private route: ActivatedRoute
  
    ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.getUser();
    this.getRoles();
    
  }

  getRoles(){
    this.roleService.roles().subscribe(
      data => {
        this.roles = data;
      }
      ,
      error => {
        console.log(error);
      }
    );
  }

  linkRole(){
    this.roleService.linkRole(this.form.userId , this.form.roleId).subscribe(
      data => {
        this.isSuccessful = true;
      }
      ,
      error => {
        this.isSuccessful = false;
    
        this.errorMessage = error.error.message;
      }
    );
  }

  getUser(){
    this.userService.getUser(this.id).subscribe( data => {
      this.user = data;
      console.log(this.user);});
  }

}
