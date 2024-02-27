import { Component } from '@angular/core';
import { HttpService, UiService } from 'wacom';
import { UserService } from 'src/app/services/user.service';
@Component({
	selector: 'delete',
	templateUrl: './delete.component.html',
	styleUrls: ['./delete.component.scss']
})
export class DeleteComponent{
	public data: any;
	constructor(
		private _http: HttpService,
		public ui: UiService,
    	public us: UserService
	) {}

  public close: any;

	request(){
		console.log(this.data);

		// console.log('hello world');
		// this._http.post('/api/user/request', {
		// 	email: this.email
		// }, resp => {
		// 	if (resp) {
		// 		this.showCode = true;
		// 	}
		// 	console.log('hello world');
		// })
	}

	closeModal() {
		this.close();
	}
}
