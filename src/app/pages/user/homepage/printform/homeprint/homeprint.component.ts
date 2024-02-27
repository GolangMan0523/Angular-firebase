import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService } from 'wacom';
@Component({
	selector: 'homeprint',
	templateUrl: './homeprint.component.html',
	styleUrls: ['./homeprint.component.scss']
})
export class HomeprintComponent{
	public section = 1;
	constructor(public us: UserService, public hash: HashService) {}
}
