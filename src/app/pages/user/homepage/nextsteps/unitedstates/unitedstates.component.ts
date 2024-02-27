import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'unitedstates',
	templateUrl: './unitedstates.component.html',
	styleUrls: ['./unitedstates.component.scss']
})
export class UnitedstatesComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
