import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HashService } from 'wacom';
@Component({
	selector: 'submissionhome',
	templateUrl: './submissionhome.component.html',
	styleUrls: ['./submissionhome.component.scss']
})
export class SubmissionhomeComponent{
	public section = 1;
	constructor(public us: UserService, public hash: HashService) {}
}
