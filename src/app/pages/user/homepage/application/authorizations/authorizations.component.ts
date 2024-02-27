import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { FlatpickrOptions } from 'ng2-flatpickr';

@Component({
  selector: 'authorizations',
  templateUrl: './authorizations.component.html',
  styleUrls: ['./authorizations.component.scss']
})
export class AuthorizationsComponent implements AfterViewChecked {
  public section = 1;


  constructor(public us: UserService, private changeDetector: ChangeDetectorRef) { }
  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
  public pickerOptions: FlatpickrOptions = {
    altInput: true
  };

  err = {
    qName: false,
    wName: false,



  };

  ChangeTab(section) {
    if (!this.us.data.application.sntendeddeparture_name) {
      this.err.qName = true;
    }
    if (!this.us.data.application.xpectedlengthoftrip_name) {
      this.err.wName = true;
    }
    this.us.pagesection = section;
  }

}





