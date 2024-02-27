import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
import { privateDecrypt } from 'crypto';
import { TotpSecret } from 'firebase/auth';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'personalinfo',
	templateUrl: './personalinfo.component.html',
	styleUrls: ['./personalinfo.component.scss']
})
export class PersonalinfoComponent implements AfterViewChecked{
	public section = 1;
  public insaidedateofbirrth_name;
	constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    private toastrService: ToastrService,
    private dataPipe: DatePipe
    ) {}

  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }

  formatDate_insaidedateofbirrth_name(){
    this.us.data.application.insaidedateofbirrth_name = this.dataPipe.transform(this.insaidedateofbirrth_name, 'MM/dd/yyyy');
  }

  err = {
    //section1
    gName: false,
    fName: false,
    //section2
    // choice2: false,
    gName2: false,
    fName2: false,
    //section3
    sex3: false,
    birthDate: false,
    birthCountry: false,
    birthState: false,
    birthCity: false,
    choice3: false,
    number3: false,
    //section4
    ethnicity: false,
    race: false,
    eyeColor: false,
    hairColor: false,
    weight: false,
    heightFeet: false,
    heightInches: false,
  };

  validateLength27(data) {
    if(data.length == 27){
      this.toastrService.error('Please enter up to 27 characters.', 'Type Error!')
    }
  }

  validateLength25(data) {
    if(data.length == 25){
      this.toastrService.error('Please enter up to 25 characters.', 'Type Error!')
    }
  }

  validateLength17(data) {
    if(data.length == 17){
      this.toastrService.error('Please enter up to 17 characters.', 'Type Error!')
    }
  }

  ChangeTab4(section){
    if(!this.us.data.application.latino_name){
      this.err.ethnicity = true;
    }
    if(!this.us.data.application.white_name || !this.us.data.application.asian_name || !this.us.data.application.africanamerican_name || !this.us.data.application.alaskanative_name || !this.us.data.application.hawaiianor_name){
      this.err.race = true;
    }
    if(!this.us.data.application.eye_name){
      this.err.eyeColor = true;
    }
    if(!this.us.data.application.hair_name){
      this.err.hairColor = true;
    }
    if(!this.us.data.application.sponsoruspounds_name){
      this.err.weight = true;
    }
    if(!this.us.data.application.sponsorusfeet_name){
      this.err.heightFeet = true;
    }
    if(!this.us.data.application.sponsorusinches_name){
      this.err.heightInches = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab3(section){
    if(!this.us.data.application.sponsorbasicinfo_name){
      this.err.sex3 = true;
    }
    if(!this.us.data.application.insaidedateofbirrth_name){
      this.err.birthDate = true;
    }
    if(!this.us.data.application.ofinsidesponsorbirth_name){
      this.err.birthCountry = true;
    }
    if(!this.us.data.application.insideorprovince_name){
      this.err.birthState = true;
    }
    if(!this.us.data.application.cityinside_name){
      this.err.birthCity = true;
    }
    if(!this.us.data.application.sponsoradministration_name){
      this.err.choice3 = true;
    }
    if(!this.us.data.application.phonenumbersponsor_name){
      this.err.number3 = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab2(section){
    if(!this.us.data.application.sponsorform_names.sponsorsubfirstname_name){
      this.err.gName2 = true;
    }
    if(!this.us.data.application.sponsorform_names.sponsorsublastname_name){
      this.err.fName2 = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab(section){
    if(!this.us.data.application.sponsorname){
      this.err.gName = true;
    }
    if(!this.us.data.application.sponsorfamily_name){
      this.err.fName = true;
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
	addsponsor(){
		this.us.data.application.sponsorform_names.push({sponsorsubfirstname_name:'',sponsorsubmiddle_name:'',sponsorsublastname_name:''})
		this.us.update()
	}
}
