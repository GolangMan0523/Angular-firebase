import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'identification',
	templateUrl: './identification.component.html',
	styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
