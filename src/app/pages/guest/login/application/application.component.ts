import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'application',
	templateUrl: './application.component.html',
	styleUrls: ['./application.component.scss']
})
export class ApplicationComponent{
	public section = 1;
	constructor(public us: UserService){}
}
