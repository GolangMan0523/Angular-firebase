import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'sponsorsummary',
	templateUrl: './sponsorsummary.component.html',
	styleUrls: ['./sponsorsummary.component.scss']
})
export class SponsorsummaryComponent{
		public section = 1;

    updateps(section: number){
      this.us.pagesection = section;
      this.us.update()
    }

    formatDate(date: any) {
      return this.dataPipe.transform(date, 'MM/dd/yyyy');
    }

    stringUpper(str: String) {
      return str.toUpperCase();
      // console.log(str);
    }


	constructor(public us: UserService, private dataPipe: DatePipe) {}
}
