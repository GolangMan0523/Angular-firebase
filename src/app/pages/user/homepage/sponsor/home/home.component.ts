import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService } from 'wacom';
@Component({
	selector: 'sponsor-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent{
	public subsection;
	public subsectiontwo;
	constructor(public us: UserService, public hash: HashService) {}
}
