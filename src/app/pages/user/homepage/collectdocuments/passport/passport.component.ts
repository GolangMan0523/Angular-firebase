import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'passport',
	templateUrl: './passport.component.html',
	styleUrls: ['./passport.component.scss']
})
export class PassportComponent{
	public section = 1;
	constructor(public us: UserService) {}
}
