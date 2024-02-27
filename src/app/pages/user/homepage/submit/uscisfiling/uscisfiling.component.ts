import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'uscisfiling',
	templateUrl: './uscisfiling.component.html',
	styleUrls: ['./uscisfiling.component.scss']
})
export class UscisfilingComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {
	}
}


