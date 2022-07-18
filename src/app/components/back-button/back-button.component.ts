import { Component, OnInit ,Input } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  @Input()color: string | undefined;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
