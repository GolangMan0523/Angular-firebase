import { Component } from '@angular/core';
import { HttpService, UiService } from 'wacom';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
@Component({
	selector: 'fargotpassword',
	templateUrl: './fargotpassword.component.html',
	styleUrls: ['./fargotpassword.component.scss']
})
export class FargotpasswordComponent{
	constructor(
		private _http: HttpService,
		public ui: UiService,
    public us: UserService,
    public auth: AuthService
	) {}

  public close: any;
	showCode = false;
	email: string;
	pin: string;
	password: string;

  forgotPassword() {
    this.auth.ForgotPassword(this.us.data.application.fargotpassword);
  }


  closeModal() {
    this.close();
  }



	change(){
		console.log('hello world');
		this._http.post('/api/user/change', {
			password: this.password,
			email: this.email,
			pin: this.pin
		}, resp => {
			console.log('hello world');
		})
	}
}
