import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';


@Component({
	selector: 'my-date',
	templateUrl: './date.component.html',
	styleUrls: ['./date.component.scss']
})
export class DateComponent {
	@Input('date') date:any;

	@Output('update') update = new EventEmitter();

  @Output('blur') blur = new EventEmitter();

  public options: FlatpickrOptions = {
    altInput: true,
    altFormat: 'm/d/Y',
		onChange: (dates, str)=>{
			this.update.emit(str);
		}
	};
  log(){
    console.log('changed')
  }
}
