import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { UserService } from 'src/app/services';
import { ModalService } from 'wacom';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { error } from 'protractor';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'application-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements AfterViewChecked {

    flatpickrOptions: FlatpickrOptions = {
    dateFormat: 'm/d/Y'
  };
  constructor(
    public us: UserService,
    public modal: ModalService,
    private changeDetector: ChangeDetectorRef,
    private toastrService: ToastrService,
    private dataPipe: DatePipe
      ) {}

  public citizenship_name;
  public appdateofbirthrepeat_names: any;


  updateps(section: number) {
    this.us.pagesection = section;
    this.us.update();
  }
  public section = 1;
  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'm-d-Y',
    altFormat: 'm-d-Y',
    onClose(dates, currentdatestring, picker) {
      picker.setDate(picker.altInput.value, true, picker.config.altFormat);
    },
  };

  err = {
    // for applicant
    gName: false,
    mName: false,
    fName: false,
    basicInfoName: false,
    mydate: false,
    anotherDate: false,
    birthCountry: false,
    birthState: false,
    birthCity: false,
    sex: false,
    cardSecur: false,
    phoneNumb: false,
    ethnicity: false,
    othergName: false,
    otherfName: false,
    languagegname: false,
    languagefname: false,
    race: false,
    eyeColor: false,
    hairColor: false,
    weight: false,
    heightFeet: false,
    heightInches: false,
    ssn: false,
  };

  validateLength(data) {
    if(data.length == 27){
      this.toastrService.error('Please enter up to 27 characters.', 'Type Error!');
    }
  }

  validateLength17(data) {
    if(data.length == 17){
      this.toastrService.error('Please enter up to 17 characters.', 'Type Error!')
    }
  }


  ChangeTab(section) {
    if (!this.us.data.application.name) {
      this.err.gName = true;
    }
    if (!this.us.data.application.middle_name) {
      this.err.fName = true;
    }
    this.us.pagesection = section;
  }

  ChangeOtherName(section) {
    if (!this.us.data.application.other_names.subfirstname_name) {
      this.err.othergName = true;
    }
    if (!this.us.data.application.other_names.sublastname_name) {
      this.err.otherfName = true;
    }
    this.us.pagesection = section;
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  ChangeTab2(section) {
    if (!this.us.data.application.ethnicity_name) {
      this.err.ethnicity = true;
    }
    if (
      !this.us.data.application.rasewhite_name ||
      !this.us.data.application.raseasian_name ||
      !this.us.data.application.raseblack_name ||
      !this.us.data.application.rasenative_name ||
      this.us.data.application.rasehawaiian_name
    ) {
      this.err.race = true;
    }
    if (!this.us.data.application.eyecolor_name) {
      this.err.eyeColor = true;
    }
    if (!this.us.data.application.colorhair_name) {
      this.err.hairColor = true;
    }
    if (!this.us.data.application.uspounds_name) {
      this.err.weight = true;
    }
    if (!this.us.data.application.usfeet_name) {
      this.err.heightInches = true;
    }
    if (!this.us.data.application.usfeet_name) {
      this.err.heightFeet = true;
    }

    if (!this.us.data.application.securitynumberone_name) {
      this.err.ssn = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab1(section) {
    if (!this.us.data.application.basicinfo_name) {
      this.err.sex = true;
    }

    const hasFalsyCountryName = true || this.us.data.application.country_names.some(name => !name.country_name);

    if (hasFalsyCountryName) {
      this.err.basicInfoName = true;
    }

    if (!this.us.data.application.citizenship_name) {
      this.err.mydate = true;
    }
    if (!this.us.data.application.appdateofbirthrepeat_names) {
      this.err.anotherDate = true;
    }
    if (!this.us.data.application.birth_name) {
      this.err.birthCountry = true;
    }
    if (!this.us.data.application.state_name) {
      this.err.birthState = true;
    }
    if (!this.us.data.application.city_name) {
      this.err.birthCity = true;
    }
    if (!this.us.data.application.phonenumber_name) {
      this.err.phoneNumb = true;
    }
    if (!this.us.data.application.administration_name) {
      this.err.cardSecur = true;
    }

    this.us.pagesection = section;
  }

  ChangeLanguage(section) {

    if (!this.us.data.application.name) {
      this.err.languagegname = true;
      console.log(this.us.data.application);
    }
    if (!this.us.data.application.family_name) {
      this.err.languagefname = true;
      console.log(this.us.data.application);
    }
    this.us.pagesection = section;
  }

  add() {
    this.us.data.application.other_names.push({
      subfirstname_name: '',
      submiddlename_name: '',
      sublastname_name: '',
    });
    this.us.update();
  }

  addCountry() {
    this.us.data.application.country_names.push({
      country_name: '',
    });
    this.us.update();
  }

  birthrepeat() {
    this.us.data.application.appdateofbirthrepeat_names.push({
      appdateofbirth_name: '',
    });
    this.us.update();
  }

  log(e) {
    console.log(e);
  }
}
