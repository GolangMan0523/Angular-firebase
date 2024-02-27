import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ModalService } from 'wacom';
@Component({
	selector: 'whatsnext',
	templateUrl: './whatsnext.component.html',
	styleUrls: ['./whatsnext.component.scss']
})
export class WhatsnextComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {}
}
