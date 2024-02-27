import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'marriageterminated',
	templateUrl: './marriageterminated.component.html',
	styleUrls: ['./marriageterminated.component.scss']
})
export class MarriageterminatedComponent{
	public section = 1;
	constructor(public us: UserService){}
}
