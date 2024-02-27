import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
	templateUrl: './uscis.component.html',
	styleUrls: ['./uscis.component.scss']
})
export class UscisComponent{
	constructor(public us: UserService) {}
}
