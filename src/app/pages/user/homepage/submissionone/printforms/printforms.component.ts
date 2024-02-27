import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'printforms',
	templateUrl: './printforms.component.html',
	styleUrls: ['./printforms.component.scss']
})
export class PrintformsComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}


}
