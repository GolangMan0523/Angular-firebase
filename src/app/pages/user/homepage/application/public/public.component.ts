import { Component } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { ModalService } from 'wacom';

@Component({
	selector: 'public',
	templateUrl: './public.component.html',
	styleUrls: ['./public.component.scss']
})
export class PublicComponent{
  public section = 1;
	constructor(public us: UserService, public modal: ModalService ) {}
  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'm-d-Y',
    altFormat: 'm-d-Y',
    onClose(dates, currentdatestring, picker) {
      picker.setDate(picker.altInput.value, true, picker.config.altFormat);
    }
  };
  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }

  err = {
    // for applicant
    size: false,
    certificates: false

  };

  ChangeOtherName(section) {
    if (!this.us.data.application.other_names.certificates) {
      this.err.certificates = true;
    }

    if (!this.us.data.application.sizeee_name) {
      this.err.size = true;
    }
    this.section = section;
  }

  addcertificates() {
    this.us.data.application.certificates_names.push({
      certificates_name: ''
    });
    this.us.update();
  }
}
