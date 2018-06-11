import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { CalculatorActions } from './app.actions';
import { rootReducer, IAppState, INITIAL_STATE } from './store';

import { AppComponent } from './app.component';
import { DigitButtonComponent } from './digit-button/digit-button.component';
import { DisplayFieldComponent } from './display-field/display-field.component';
import { OperationButtonComponent } from './operation-button/operation-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DigitButtonComponent,
    DisplayFieldComponent,
    OperationButtonComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [CalculatorActions],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    // Tell @angular-redux/store about our rootReducer and our initial state.
    // It will use this to create a redux store for us and wire up all the events.
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE);
  }
}
