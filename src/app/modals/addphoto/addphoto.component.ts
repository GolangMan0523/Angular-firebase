import { Component } from '@angular/core';
import { UserService } from 'src/app/services';

@Component({
	selector: 'addphoto',
	templateUrl: './addphoto.component.html',
	styleUrls: ['./addphoto.component.scss']
})
export class AddphotoComponent{
	constructor(public us: UserService) { }
	additempass() {
	  this.us.data.application.addpass_names.push(this.us.data.application.addpass_name);
	  this.us.data.application.addpass_name = '';
	  this.us.update();
	};
	
	close() {
  
	}
}
