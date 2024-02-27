import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'proofofinancial',
	templateUrl: './proofofinancial.component.html',
	styleUrls: ['./proofofinancial.component.scss']
})
export class ProofofinancialComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
