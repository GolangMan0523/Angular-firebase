import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService, ModalService } from 'wacom';

@Component({
	selector: 'submissiontwohome',
	templateUrl: './submissiontwohome.component.html',
	styleUrls: ['./submissiontwohome.component.scss']
})
export class SubmissiontwohomeComponent{
	public section = 1;
	constructor(public us: UserService, public hash: HashService, public modal: ModalService) {}
}
