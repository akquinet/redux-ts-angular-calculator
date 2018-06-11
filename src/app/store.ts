import { Action } from './app.actions';

enum Operator {
  Plus,
  Minus,
  Compute,
  None
}

export interface IAppState {
  display: number;
  main: number;
  back: number;
  activeOperator: Operator;
}

export const INITIAL_STATE: IAppState = {
  display: 0,
  main: 0,
  back: 0,
  activeOperator: Operator.None
};

function reduceDigit(state: IAppState, digit: number): IAppState {
  if (state.activeOperator === Operator.Compute) {
    return { ...state, display: digit, main: digit, back: 0, activeOperator: Operator.None };
  } else {
    const next = state.main * 10 + digit;
    return { ...state, display: next, main: next };
  }
}

function reduceApply(state: IAppState, operator: Operator): IAppState {
  let result;
  switch (state.activeOperator) {
    case Operator.None:   result = state.main;              break;
    case Operator.Plus:   result = state.back + state.main; break;
    case Operator.Minus:  result = state.back - state.main; break;
    default:              result = state.back;              break;
  }
  return { ...state, display: result, main: 0, back: result, activeOperator: operator };
}

export function rootReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
    case 'ADD_DIGIT':     return reduceDigit(state, action.digit);
    case 'APPLY_PLUS':    return reduceApply(state, Operator.Plus);
    case 'APPLY_MINUS':   return reduceApply(state, Operator.Minus);
    case 'APPLY_COMPUTE': return reduceApply(state, Operator.Compute);
    default: return state;
  }
}
