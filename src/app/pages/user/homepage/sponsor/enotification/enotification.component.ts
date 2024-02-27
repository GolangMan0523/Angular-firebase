import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { FlatpickrOptions } from 'ng2-flatpickr';

@Component({
  selector: 'sponsor-enotification',
  templateUrl: './enotification.component.html',
  styleUrls: ['./enotification.component.scss'],
})
export class EnotificationComponent {
  public section = 1;
  constructor(public us: UserService) {}

  updateps(section: number) {
    this.us.pagesection = section;
    this.us.update();
  }

  err = {
    choice: false,
    email: false,
    number: false,
    datesignature: false
  };

  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'Z',
    altFormat: 'm-d-Y',
  };

  error(){
    // this.err.email = false;
    console.log(this.err.email);
  }

  ChangeTab(section) {
    if (!this.us.data.application.notification_name) {
      this.err.choice = true;
    }

    if (!this.us.data.application.signaturedate_name) {
      this.err.datesignature = true;
    }
    if (!this.us.data.enotificationemail_name) {
      this.err.email = true;
    }
    if (!this.us.data.enotificationmiddle_name) {
      this.err.number = true;
    }
    this.us.pagesection = section;
  }
}
