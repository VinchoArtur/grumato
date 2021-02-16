import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignUpWindowComponent } from './login-sign-up-window.component';

describe('LoginSignUpWindowComponent', () => {
  let component: LoginSignUpWindowComponent;
  let fixture: ComponentFixture<LoginSignUpWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignUpWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSignUpWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
