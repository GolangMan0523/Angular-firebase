import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'cardholder',
	templateUrl: './cardholder.component.html',
	styleUrls: ['./cardholder.component.scss']
})
export class CardholderComponent{
	public section = 1;
	constructor(public us: UserService){}
}
