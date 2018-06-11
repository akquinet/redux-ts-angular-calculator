import {Component, Input} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {CalculatorActions} from '../app.actions';
import {IAppState} from '../store';

@Component({
  selector: 'app-digit-button',
  templateUrl: './digit-button.component.html',
  styleUrls: ['./digit-button.component.css']
})
export class DigitButtonComponent {

  @Input() digit: number;

  constructor(private ngRedux: NgRedux<IAppState>, private actions: CalculatorActions) {
  }

  onClick() {
    this.ngRedux.dispatch(this.actions.addDigit(this.digit));
  }

}
