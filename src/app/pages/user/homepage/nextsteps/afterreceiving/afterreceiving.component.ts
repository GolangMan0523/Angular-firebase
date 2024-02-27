import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'afterreceiving',
	templateUrl: './afterreceiving.component.html',
	styleUrls: ['./afterreceiving.component.scss']
})
export class AfterreceivingComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
