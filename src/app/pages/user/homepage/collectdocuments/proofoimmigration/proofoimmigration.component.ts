import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';

@Component({
	selector: 'proofoimmigration',
	templateUrl: './proofoimmigration.component.html',
	styleUrls: ['./proofoimmigration.component.scss']
})
export class ProofoimmigrationComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
