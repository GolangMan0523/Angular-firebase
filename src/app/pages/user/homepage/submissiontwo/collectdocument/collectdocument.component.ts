import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'collectdocument',
	templateUrl: './collectdocument.component.html',
	styleUrls: ['./collectdocument.component.scss']
})
export class CollectdocumentComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}

