import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'trackapplication',
	templateUrl: './trackapplication.component.html',
	styleUrls: ['./trackapplication.component.scss']
})
export class TrackapplicationComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService  ) {}

}
