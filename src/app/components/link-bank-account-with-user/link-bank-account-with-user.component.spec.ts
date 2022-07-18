import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBankAccountWithUserComponent } from './link-bank-account-with-user.component';

describe('LinkBankAccountWithUserComponent', () => {
  let component: LinkBankAccountWithUserComponent;
  let fixture: ComponentFixture<LinkBankAccountWithUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkBankAccountWithUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkBankAccountWithUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
