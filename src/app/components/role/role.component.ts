import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { Router  } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
  
  id! : number;
  roles!: any[];
  form: any = {
    roleId:null
  };
  isSuccessful = false;
  isDepositFailed = false;
  errorMessage = '';

  
 roleAdd: any = [ 
    { id: 1, name: 'admin' },
    { id: 2, name: 'user' },
 ]

  constructor(
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
      this.getRoles();
  }

  getRoles(){
    this.roleService.roles().subscribe(
      data => {
        this.roles = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  addRole(){
      this.roleService.addRole(this.form).subscribe(
        data => {
          this.isSuccessful = true;
          this.isDepositFailed = false;
        }
        ,
        error => {
          this.isSuccessful = false;
          this.isDepositFailed = true;
          this.errorMessage = error.error.message;
        }
      );
  }

  deleteRole(id: number){
    this.roleService.deleteRole(id).subscribe(
      data => {
        this.isSuccessful = true;
        this.isDepositFailed = false;
      }
      ,
      error => {
        this.isSuccessful = false;
        this.isDepositFailed = true;
        this.errorMessage = error.error.message;
      }
    );
  }


}
