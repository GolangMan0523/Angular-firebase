import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'medical',
	templateUrl: './medical.component.html',
	styleUrls: ['./medical.component.scss']
})
export class MedicalComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
