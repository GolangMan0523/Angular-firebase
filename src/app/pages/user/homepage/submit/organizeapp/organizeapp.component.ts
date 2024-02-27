import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'organizeapp',
	templateUrl: './organizeapp.component.html',
	styleUrls: ['./organizeapp.component.scss']
})
export class OrganizeappComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
