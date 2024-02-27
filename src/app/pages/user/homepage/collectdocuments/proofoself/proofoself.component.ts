import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'proofoself',
	templateUrl: './proofoself.component.html',
	styleUrls: ['./proofoself.component.scss']
})
export class ProofoselfComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
