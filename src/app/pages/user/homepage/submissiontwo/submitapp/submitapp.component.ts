import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'submitapp',
	templateUrl: './submitapp.component.html',
	styleUrls: ['./submitapp.component.scss']
})
export class SubmitappComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
