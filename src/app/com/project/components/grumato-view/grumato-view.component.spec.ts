import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrumatoViewComponent } from './grumato-view.component';

describe('GrumatoViewComponent', () => {
  let component: GrumatoViewComponent;
  let fixture: ComponentFixture<GrumatoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrumatoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrumatoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
