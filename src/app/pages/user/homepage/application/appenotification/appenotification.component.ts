import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'appenotification',
	templateUrl: './appenotification.component.html',
	styleUrls: ['./appenotification.component.scss']
})
export class AppenotificationComponent{

	constructor(public us: UserService, private toastrService: ToastrService) {}

  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }
  public section = 1;
  err = {
    choice: false,
    email: false,
    number: false,
    appdatesignature: false
  }

  validateLength15(data) {
    if(data.length == 15){
      this.toastrService.error('Please enter up to 15 characters.', 'Type Error!')
    }
  }

  ChangeTab(section){
    if(!this.us.data.application.wanttorequestenot_name){
      this.err.choice = true;
    }

    if(!this.us.data.application.appsignaturedate_name){
      this.err.appdatesignature = true;
    }


    this.us.pagesection = section;
  }
}
