import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'finalcheck',
	templateUrl: './finalcheck.component.html',
	styleUrls: ['./finalcheck.component.scss']
})
export class FinalcheckComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
