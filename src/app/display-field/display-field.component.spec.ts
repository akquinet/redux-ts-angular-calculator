import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import {DisplayFieldComponent} from './display-field.component';
import {MockNgRedux, NgReduxTestingModule} from '@angular-redux/store/lib/testing';
import {IAppState} from '../store';
import {Subject} from 'rxjs';

describe('DisplayFieldComponent', () => {
  let component: DisplayFieldComponent;
  let fixture: ComponentFixture<DisplayFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayFieldComponent],
      imports: [NgReduxTestingModule]
    })
    .compileComponents();

    // Reset the mock to start from a clean slate in each unit test.
    MockNgRedux.reset();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should show changes of display cell in the text field', async(() => {

    // Get a stub we can use to drive the `@select('display')` observable used by DisplayFieldComponent.
    // This stub will be supplied to any relevant `.select` or `@select` calls used by the component under test by MockNgRedux.
    const testDisplay: Subject<number> = MockNgRedux.getSelectorStub<IAppState, number>('display');

    const displayField = fixture.debugElement.nativeElement.querySelector('#displayFieldId');

    expect(displayField.value).toBe(''); // no value yet

    const newDisplay = 4711;
    testDisplay.next(newDisplay); // simulate new value being updated by store

    fixture.detectChanges();

    expect(displayField.value).toBe('' + newDisplay);
    console.log(displayField);
  }));

});
