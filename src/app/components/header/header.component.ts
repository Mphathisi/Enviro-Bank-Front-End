import { Component, OnInit } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { TransferComponent } from '../transfer/transfer.component';
import { AccountdetailsComponent } from '../accountdetails/accountdetails.component';

import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentUser: any;
  isLogin(): boolean {
      return this.token.getToken() ? true : false;
  }

  role!: string;


    ngOnInit() {
      this.currentUser = this.token.getUser();
    }
  
    constructor(private _bottomSheet: MatBottomSheet,
      private token: TokenStorageService
      ) {}
  
  
    view(id: number): void {
      this._bottomSheet.open(AccountdetailsComponent, { panelClass: 'custom-width' });
    }


    currentUserRole(): string {
      return this.token.getUser().role;
    }
    roleAdmin(): boolean {
      return this.token.getUser().role === 'admin';
    }
    roleUser(): boolean {
      return this.token.getUser().role === 'user';
    }
    roleAdminOrUser(): boolean {
      return this.token.getUser().role === 'admin' || this.token.getUser().role === 'user';
    }
    


  
  

}
