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
  
 
  isSuccessful = false;

  errorMessage = '';

  form: any = {
    name: '',
  };


  constructor(
    private roleService: RoleService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
  }


  addRole(){
      this.roleService.addRole(this.form).subscribe(
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

}
