import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
	templateUrl: './alien.component.html',
	styleUrls: ['./alien.component.scss']
})
export class AlienComponent{
  constructor(public us: UserService) {}
}
