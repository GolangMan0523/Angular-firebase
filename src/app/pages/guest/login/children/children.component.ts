import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'children',
	templateUrl: './children.component.html',
	styleUrls: ['./children.component.scss']
})
export class ChildrenComponent{
	public section = 1;
	constructor(public us: UserService){}
}
