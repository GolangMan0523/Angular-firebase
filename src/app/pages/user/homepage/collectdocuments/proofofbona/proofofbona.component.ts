import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'proofofbona',
	templateUrl: './proofofbona.component.html',
	styleUrls: ['./proofofbona.component.scss']
})
export class ProofofbonaComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
