import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'nextsteps',
	templateUrl: './nextsteps.component.html',
	styleUrls: ['./nextsteps.component.scss']
})
export class NextstepsComponent{
	public section = 1;
	constructor(public us: UserService) {}
}
