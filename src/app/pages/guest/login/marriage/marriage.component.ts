import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'marriage',
	templateUrl: './marriage.component.html',
	styleUrls: ['./marriage.component.scss']
})
export class MarriageComponent{
	public section = 1;
	constructor(public us: UserService){}
}
