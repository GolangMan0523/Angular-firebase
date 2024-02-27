import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { AuthService } from '../../../../services/auth.service'
@Component({
	selector: 'security',
	templateUrl: './security.component.html',
	styleUrls: ['./security.component.scss']
})
export class SecurityComponent {
	public close = ()=>{};
	public oldPass = '';
	public newPass = '';
	constructor(
		public us: UserService,
    public auth:AuthService
	) { }
	ngOnInit() {
		document.body.classList.add('_modal-small');
	}


  changePassword() {
    this.auth.ChangePassword(this.newPass);
  }

	ngOnDestroy() {
		document.body.classList.remove('_modal-small');
	}
}
