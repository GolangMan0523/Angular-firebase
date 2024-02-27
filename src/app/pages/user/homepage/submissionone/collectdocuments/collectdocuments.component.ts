import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'collectdocuments',
	templateUrl: './collectdocuments.component.html',
	styleUrls: ['./collectdocuments.component.scss']
})
export class CollectdocumentsComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
