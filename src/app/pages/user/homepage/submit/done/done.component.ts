import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'done',
	templateUrl: './done.component.html',
	styleUrls: ['./done.component.scss']
})
export class DoneComponent{
		public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
