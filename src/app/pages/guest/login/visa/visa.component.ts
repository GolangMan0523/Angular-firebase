import { Component } from '@angular/core';
import { UserService} from 'src/app/services/user.service';
@Component({
	selector: 'visa',
	templateUrl: './visa.component.html',
	styleUrls: ['./visa.component.scss']
})
export class VisaComponent{
	public section = 1;
	constructor(public us: UserService){}
}

