import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'printi864',
	templateUrl: './printi864.component.html',
	styleUrls: ['./printi864.component.scss']
})
export class Printi864Component{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
