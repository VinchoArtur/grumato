import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardsWindowComponent } from './user-cards-window.component';

describe('UserCardsWindowComponent', () => {
  let component: UserCardsWindowComponent;
  let fixture: ComponentFixture<UserCardsWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardsWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCardsWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
