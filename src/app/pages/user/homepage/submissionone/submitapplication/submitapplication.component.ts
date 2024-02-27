import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'submitapplication',
	templateUrl: './submitapplication.component.html',
	styleUrls: ['./submitapplication.component.scss']
})
export class SubmitapplicationComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
