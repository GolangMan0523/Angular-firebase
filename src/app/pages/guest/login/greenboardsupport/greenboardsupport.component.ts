import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpService, UiService } from 'wacom';

@Component({
	selector: 'greenboardsupport',
	templateUrl: './greenboardsupport.component.html',
	styleUrls: ['./greenboardsupport.component.scss']
})
export class GreenboardsupportComponent{
	public section = 1;
	constructor(public us: UserService, private _http: HttpService,
		public ui: UiService){}
	back(){
		if(this.us.data.cardholder=='us') {
			this.us.auth='visa'
		}else if(this.us.data.cardholder=='greencard'&& this.us.data.location=='outside'){
			this.us.auth='marriageterminated'
		}else if(this.us.data.cardholder=='greencard'&& this.us.data.location=='inside'){
			this.us.auth='children'
		}

	}
}
