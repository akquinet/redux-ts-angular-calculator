import { Injectable } from '@angular/core';

/**
 * This class provides action creators for the calculator.
 * Action creators make it easier to maintain actions,
 * by encapsulating action details and keeping them in one place
 * for documentation and later changes.
 *
 * TypeScript specific: Each action type must be defined by a specific class or interface.
 */

interface DigitAction {
  type: 'ADD_DIGIT';
  digit: number;
}

interface OperatorAction {
  type: 'APPLY_PLUS' | 'APPLY_MINUS' | 'APPLY_COMPUTE';
}

export type Action = DigitAction | OperatorAction;


@Injectable()
export class CalculatorActions {

  // for some reason, this makes IntelliJ IDEA "Find Usage" and "Refactor" work
  static ADD_DIGIT = 'ADD_DIGIT';
  static APPLY_PLUS = 'APPLY_PLUS';
  static APPLY_MINUS = 'APPLY_MINUS';
  static APPLY_COMPUTE = 'APPLY_COMPUTE';

  addDigit(digit: number): Action {
    return { type: 'ADD_DIGIT', digit: digit };
  }

  applyPlus(): Action {
    return { type: 'APPLY_PLUS' };
  }

  applyMinus(): Action {
    return { type: 'APPLY_MINUS' };
  }

  compute(): Action {
    return { type: 'APPLY_COMPUTE' };
  }

}
