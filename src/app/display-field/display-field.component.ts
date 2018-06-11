import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {IAppState} from '../store';

@Component({
  selector: 'app-display-field',
  templateUrl: './display-field.component.html',
  styleUrls: ['./display-field.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisplayFieldComponent {

  // MAGIC! This 'selects' the display field from the store, and exposes its changes as display$ observable. Requires async pipe.
  // By default, the annotation uses a field with the same name as the variable, without the $ suffix.
  // Alternatively, specify a field explicitly by name via @select('name'), or even path via @select(['a','b','c'])
  @select() readonly display$: Observable<number>;

  /* This is the more elaborate version of the annotation above:

    readonly display$: Observable<number>;

    constructor(private ngRedux: NgRedux) {
        this.display$ = ngRedux.select<number>('main');
    }
   */

}
