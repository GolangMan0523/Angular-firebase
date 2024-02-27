import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'physicaladdress',
	templateUrl: './physicaladdress.component.html',
	styleUrls: ['./physicaladdress.component.scss']
})
export class PhysicaladdressComponent{
	public section = 1;
	constructor(public us: UserService){}
}
