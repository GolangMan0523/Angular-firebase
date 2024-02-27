import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { ModalService } from 'wacom';
@Component({
	selector: 'marriagedocuments',
	templateUrl: './marriagedocuments.component.html',
	styleUrls: ['./marriagedocuments.component.scss']
})
export class MarriagedocumentsComponent{
	public section = 1;
	constructor(public us: UserService, public modal: ModalService) {
  }
  

  test(parans: any){
    console.log(parans);

  }
}
