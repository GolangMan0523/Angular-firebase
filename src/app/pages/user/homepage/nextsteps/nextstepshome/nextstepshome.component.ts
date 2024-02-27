import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService, ModalService } from 'wacom';
@Component({
	selector: 'nextstepshome',
	templateUrl: './nextstepshome.component.html',
	styleUrls: ['./nextstepshome.component.scss']
})
export class NextstepshomeComponent{
	public section = 1;
	constructor(public us: UserService, public hash: HashService, public modal: ModalService ){}
}
