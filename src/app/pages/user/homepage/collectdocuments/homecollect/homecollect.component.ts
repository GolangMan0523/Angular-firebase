import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService } from 'wacom';
@Component({
	selector: 'homecollect',
	templateUrl: './homecollect.component.html',
	styleUrls: ['./homecollect.component.scss']
})
export class HomecollectComponent{
	public section = 1;
	constructor(public us: UserService, public hash: HashService) {}



}
