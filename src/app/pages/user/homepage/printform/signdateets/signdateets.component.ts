import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'signdateets',
	templateUrl: './signdateets.component.html',
	styleUrls: ['./signdateets.component.scss']
})
export class SigndateetsComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
