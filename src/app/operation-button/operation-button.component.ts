import {Component, Input} from '@angular/core';
import {NgRedux} from '@angular-redux/store';
import {Action, CalculatorActions} from '../app.actions';
import {IAppState} from '../store';

@Component({
  selector: 'app-operation-button',
  templateUrl: './operation-button.component.html',
  styleUrls: ['./operation-button.component.css']
})
export class OperationButtonComponent {

  @Input() operationSymbol: string;

  constructor(private ngRedux: NgRedux<IAppState>, private actions: CalculatorActions) {
  }

  onClick() {
    // NOTE:
    // I am keeping the Sodium interface here, which requires this non-optimal implementation.
    // Better pass the desired operation type as event data, provide an Input, ...
    this.ngRedux.dispatch(this.getAction()());
  }

  private getAction(): () => Action {
    switch (this.operationSymbol) {
      case '+': return this.actions.applyPlus;
      case '-': return this.actions.applyMinus;
      case '=': return this.actions.compute;
      default : throw new Error('unsupported operation ' + this.operationSymbol);
    }
  }

}
