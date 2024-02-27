import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ModalService } from 'wacom';
import { SecurityComponent } from './security/security.component';
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router';
@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent{
	constructor(public us: UserService, private modal: ModalService,   public auth: AuthService, private router: Router, ) {}
  change_password(){
		this.modal.show({
			component: SecurityComponent
		});
	}

  logOut() {
    this.auth.SignOut();
    this.router.navigate(['/auth']);
  }
}
