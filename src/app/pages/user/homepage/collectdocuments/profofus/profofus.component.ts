import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { ModalService } from 'wacom';
@Component({
	selector: 'profofus',
	templateUrl: './profofus.component.html',
	styleUrls: ['./profofus.component.scss']
})
export class ProfofusComponent{
	public section = 1;
	constructor(public us: UserService,  public modal: ModalService) {}
}
