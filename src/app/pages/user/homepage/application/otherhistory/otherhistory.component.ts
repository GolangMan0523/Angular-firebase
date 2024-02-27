import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { ModalService } from 'wacom';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'otherhistory',
  templateUrl: './otherhistory.component.html',
  styleUrls: ['./otherhistory.component.scss']
})
export class OtherhistoryComponent implements AfterViewChecked {
  public section = 1;
  constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    public modal: ModalService,
    private toastrService: ToastrService
    ) { }
  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }

  err = {
    //section 2
    choice: false,
    //if yes
    orgName: false,
    orgCity: false,
    orgState: false,
    orgCountry: false,
    orgNature: false,
    orgStartDate: false,
    orgEndDate: false,
    //section 3
    choice1: false,
    choose1: false,
    text1: false,
    text2: false,
    text3: false,
    text4: false,
    text5: false,

  };

  validateLength25(data) {
    if(data.length == 25){
      this.toastrService.error('Please enter up to 25 characters.', 'Type Error!')
    }
  }

  ChangeTab3(section){
    if(!this.us.data.application.orimpairments_name){
      this.err.choice1 = true;
    }
    if(!this.us.data.application.ofhearing_name || !this.us.data.application.lowvision_name || !this.us.data.application.anothertypeofdisability_name){
      this.err.choose1 = true;
    }
    if(!this.us.data.application.torequestext_name){
      this.err.text1 = true;
    }
    if(!this.us.data.application.accommodationtorequest_name){
      this.err.text2 = true;
    }
    if(!this.us.data.application.ofthedisabilityand_name){
      this.err.text3 = true;
    }
    if(!this.us.data.application.whataccommodation_name){
      this.err.text4 = true;
    }
    if(!this.us.data.application.torequestextt_name){
      this.err.text5 = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab2(section){
    if(!this.us.data.application.anymilitaryservice_name){
      this.err.choice = true;
    };
    if(!this.us.data.application.theseorganizations_names.nameorganization_name){
      this.err.orgName = true;
    };
    if(!this.us.data.application.theseorganizations_names.locationcityortawn_name){
      this.err.orgCity = true;
    }
    if(!this.us.data.application.theseorganizations_names.locationstateor_name){
      this.err.orgState = true;
    }
    if(!this.us.data.application.theseorganizations_names.locationcountryus_name){
      this.err.orgCountry = true;
    }
    if(!this.us.data.application.theseorganizations_names.natureofdroup_name){
      this.err.orgNature = true;
    }
    if(!this.us.data.application.theseorganizations_names.certificationifanyus_name){
      this.err.orgStartDate = true;
    }
    if(!this.us.data.application.theseorganizations_names.certificationifany_name){
      this.err.orgEndDate = true;
    }

    this.us.pagesection = section;
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'Z',
    altFormat: 'm-d-Y'
  };
  theseorganizationsadd() {
    this.us.data.application.theseorganizations_names.push({
      nameorganization_name: '',
      locationcityortawn_name: '',
      locationstateor_name: '',
      locationcountryus_name: '',
      natureofdroup_name: '',
      certificationifany_name: '',
      certificationifanyus_name: '',
      involvementend_name: ''
    })
    this.us.update()
  }
}
