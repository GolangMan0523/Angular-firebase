import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'owner',
	templateUrl: './owner.component.html',
	styleUrls: ['./owner.component.scss']
})
export class OwnerComponent{
	public section = 1;
	constructor(public us: UserService){}
}
