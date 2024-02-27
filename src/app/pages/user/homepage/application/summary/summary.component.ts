import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'application-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
})
export class SummaryComponent{
	public section = 1;
  public appdateofbirth_name;

	constructor(public us: UserService, private dataPipe: DatePipe) { }

  formatDate(date: any) {
    return this.dataPipe.transform(date, 'MM/dd/yyyy');
  }

  stringUpper(str: String) {
    return str.toUpperCase();
    // console.log(str);
  }


  updateps(section: number){
    this.us.pagesection = section;
  }

  //   convertDateFormat(preDate){
  //   const dateArray = preDate.split('-');
  //   this.us.data.application.citizenship_name = dateArray[1]+'/'+dateArray[2]+'/'+dateArray[0];

  // }
}
