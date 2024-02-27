import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HashService } from 'wacom';
@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss']
})
export class UserComponent {
	public case;
	constructor(public us: UserService, public hash: HashService){
		this.us.tab = this.hash.get('tab') || 'application';
	}
}
