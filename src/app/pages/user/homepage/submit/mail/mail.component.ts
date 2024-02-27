import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'mail',
	templateUrl: './mail.component.html',
	styleUrls: ['./mail.component.scss']
})
export class MailComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
