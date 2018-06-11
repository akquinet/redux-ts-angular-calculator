import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {OperationButtonComponent} from './operation-button.component';
import {NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {CalculatorActions} from '../app.actions';

describe('OperationButtonComponent', () => {
  let component: OperationButtonComponent;
  let fixture: ComponentFixture<OperationButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperationButtonComponent],
      imports: [NgReduxTestingModule],
      providers: [CalculatorActions]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(OperationButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
