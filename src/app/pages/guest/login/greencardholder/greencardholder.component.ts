import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'greencardholder',
	templateUrl: './greencardholder.component.html',
	styleUrls: ['./greencardholder.component.scss']
})
export class GreencardholderComponent{
	public section = 1;
	constructor(public us: UserService){}

  err = {
    applName: false,
    sponsorName: false,
  }

  ChangeTab(section){
    if(!this.us.data.application.name){
      this.err.applName = true;
    }
    if(!this.us.data.application.sponsorname){
      this.err.sponsorName = true;
    }
    this.section = section;
  }
}
