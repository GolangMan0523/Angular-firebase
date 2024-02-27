import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { Toast, ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'application-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.scss']
})
export class FamilyComponent implements AfterViewChecked {
  public section = 1;
  constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    private toastrService: ToastrService,
    private dataPipe: DatePipe
    ) { }
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }

  validateLength27(data) {
    if(data.length == 27){
      this.toastrService.error('Please enter up to 27 characters.', 'Type Error!')
    }
  }

  validateLength17(data) {
    if(data.length == 17){
      this.toastrService.error('Please enter up to 17 characters.', 'Type Error!')
    }
  }

  updateps(section: number) {
    this.us.pagesection = section;
    this.us.update()
  }

  err = {

    gName: false,
    fName: false,
    diffName: false,
    diffGName: false,
    diffFName: false,
    dateOfBirth: false,
    birthCountry: false,
    birthCity: false,

    dadGName: false,
    dadFName: false,
    dadDiffName: false,
    dadDiffGName: false,
    dadDiffFName: false,
    dadBirth: false,
    dadCountry: false,
    dadCity: false,

    countMarriage: false,
    dateMarriage: false,
    cityMarriage: false,
    countryMarriage: false,
    currMember: false,

    anyMarriage: false,
    gName1: false,
    fName1: false,
    dateOfBirth1: false,
    dateOfMarriage: false,
    cityMarriage1: false,
    stateMarriage: false,
    countryMarriage1: false,
    cityEnded: false,
    stateEnded: false,
    countryEnded: false,

    anyChildren: false,
    totalCount: false,
    gNameChilds: false,
    fNameChilds: false,
    birthChilds: false,
    childsCountry: false,

  }

  ChangeTab5(section) {
    if (!this.us.data.application.marriages_name) {
      this.err.anyMarriage = true;
    }
    if (!this.us.data.application.marriages_names.mother_name) {
      this.err.gName1 = true;
    }
    if (!this.us.data.application.marriages_names.motherfamily_name) {
      this.err.fName1 = true;
    }
    if (!this.us.data.application.marriages_names.marriagedatespouses_name) {
      this.err.dateOfBirth1 = true;
    }
    if (!this.us.data.application.marriages_names.marriagedatespouse_name) {
      this.err.dateOfMarriage = true;
    }
    if (!this.us.data.application.marriages_names.marriagetopriortownspouse_name) {
      this.err.cityMarriage1 = true;
    }
    if (!this.us.data.application.marriages_names.marriagetopriorprovince_name) {
      this.err.stateMarriage = true;
    }
    if (!this.us.data.application.marriages_names.marriagetopriorcountry_name) {
      this.err.countryMarriage1 = true;
    }
    if (!this.us.data.application.marriages_names.marriagelegallyendedtown_name) {
      this.err.cityEnded = true;
    }
    if (!this.us.data.application.marriages_names.marriagelegallyendedstate_name) {
      this.err.stateEnded = true;
    }
    if (!this.us.data.application.marriages_names.marriagelegallyendedcontry_name) {
      this.err.countryEnded = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab2(section) {
    if (!this.us.data.application.marriages_name) {
      this.err.dateOfMarriage = true;
    }
    if (!this.us.data.application.livingmarried_name) {
      this.err.countMarriage = true;
    }
    if (!this.us.data.application.marriagecountry_name) {
      this.err.countryMarriage = true;
    }
    if (!this.us.data.application.currentmember_name) {
      this.err.currMember = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab1(section) {
    if (!this.us.data.application.father_name) {
      this.err.dadGName = true;
    }
    if (!this.us.data.application.father_family_name) {
      this.err.dadFName = true;
    }
    if (!this.us.data.application.fathercurrent_name) {
      this.err.dadDiffName = true;
    }
    if (!this.us.data.application.fathers_name) {
      this.err.dadDiffGName = true;
    }
    if (!this.us.data.application.fathers_family_name) {
      this.err.dadDiffFName = true;
    }
    if (!this.us.data.application.fatherbirth_name) {
      this.err.dadBirth = true;
    }
    if (!this.us.data.application.fathercountry_name) {
      this.err.birthCountry = true;
    }
    if (!this.us.data.application.fathercity_name) {
      this.err.dadCity = true;
    }

    this.us.pagesection = section;

  }

  ChangeTab(section) {

    if (!this.us.data.application.mother_name) {
      this.err.gName = true;
    }
    if (!this.us.data.application.mother_family_name) {
      this.err.fName = true;
    }
    if (!this.us.data.application.mothercheck_name) {
      this.err.diffName = true;
    }
    if (!this.us.data.application.mothers_name) {
      this.err.diffGName = true;
    }
    if (!this.us.data.application.mothers_family_name) {
      this.err.diffFName = true;
    }
    if (!this.us.data.application.motherbirth_name) {
      this.err.dateOfBirth = true;
    }
    if (!this.us.data.application.motherCountry_name) {
      this.err.birthCountry = true;
    }
    if (!this.us.data.application.mothercity_name) {
      this.err.birthCity = true;
    }

    this.us.pagesection = section;
  }

  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'Z',
    altFormat: 'm-d-Y'
  };
  marriageadd() {
    this.us.data.application.marriages_names.push({
      mother_name: '',
      childscurrentmiddele_name: '',
      mothermiddle_name: '',
      motherfamily_name: '',
      marriagedatespouses_name: '',
      marriagedatespouse_name: '',
      marriagetopriortownspouse_name: '',
      marriagetopriorprovince_name: '',
      marriagetopriorcountry_name: '',
      marriagespousesdateofbirth_name: '',
      marriagelegallyendedstate_name: '',
      marriagelegallyendedcontry_name: '',
    })
    this.us.update()
  }
  childadd() {
    this.us.data.application.children_names.push({
      childscurrent_name: '',
      childscurrentmiddele_name: '',
      childscurrentfamily_name: '',
      childscurrentdatefobirth_name: '',
      childscurrentcountryofbirth_name: '',
      childscurrentanumber_name: '',
    })
    this.us.update()
  }
}
