import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService } from 'wacom';
@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent{
	public section = 1;
	constructor(public us: UserService, public hash: HashService) {}
}
