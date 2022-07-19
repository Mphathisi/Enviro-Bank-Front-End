import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkRoleComponent } from './link-role.component';

describe('LinkRoleComponent', () => {
  let component: LinkRoleComponent;
  let fixture: ComponentFixture<LinkRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
