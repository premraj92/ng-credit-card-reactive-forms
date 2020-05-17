import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditInputComponent } from './credit-input.component';

describe('CreditInputComponent', () => {
  let component: CreditInputComponent;
  let fixture: ComponentFixture<CreditInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
