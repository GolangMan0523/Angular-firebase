import { Component } from '@angular/core';
import { UserService } from 'src/app/services';

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent {
  constructor(public us: UserService) { }
  additem() {
    this.us.data.application.add_names.push(this.us.data.application.add_name);
    this.us.data.application.add_name = '';
    this.us.update();
  };

  close() {

  }
}
