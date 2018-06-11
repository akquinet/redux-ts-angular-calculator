import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitButtonComponent } from './digit-button.component';
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {CalculatorActions} from '../app.actions';

describe('DigitButtonComponent', () => {
  let component: DigitButtonComponent;
  let fixture: ComponentFixture<DigitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitButtonComponent ],
      imports: [NgReduxTestingModule],
      providers: [CalculatorActions]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
