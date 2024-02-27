import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { HashService, ModalService } from 'wacom';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  constructor(
    public us: UserService,
    public hash: HashService,
    public modal: ModalService
  ) {
    console.log('Home page');
    this.us.section = this.hash.get('section') || 'home';
  }

  ngOnInit() {
    if (!localStorage.getItem('foo')) {
      localStorage.setItem('foo', 'no reload');
      location.reload();
    } else {
      localStorage.removeItem('foo');
    }
  }
}
