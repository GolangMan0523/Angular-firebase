import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'price',
	templateUrl: './price.component.html',
	styleUrls: ['./price.component.scss']
})
export class PriceComponent{
	public section = 1;
	constructor(public us: UserService){}
}
