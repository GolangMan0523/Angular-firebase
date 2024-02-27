import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { Toast, ToastrService } from 'ngx-toastr';
import { privateDecrypt } from 'crypto';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'application-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss']
})
export class EmploymentComponent implements AfterViewChecked {

  public startemploymentus_name;
  public endemploymentus_name;

  constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    private toastrService: ToastrService,
    private dataPipe: DatePipe
    ) { }

  public pagesection = 1;
  public section = 1;
  updateps(section: number) {
    this.us.pagesection = section;
    this.us.update()
  }

  // live(index: number){
  //   console.log("=====================", this.us.data.application.employerone_names[index].asfnumberusss_name)
  // }

  // formatDate_startemploymentus_name(){
  //   this.us.data.application.startemploymentus_name = this.dataPipe.transform(this.startemploymentus_name, 'MM/dd/yyyy');
  // }

  // formatDate_endemploymentus_name(){
  //   this.us.data.application.endemploymentus_name = this.dataPipe.transform(this.endemploymentus_name, 'MM/dd/yyyy');
  // }
  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
  err = {
    employerName: false,
    adressCompany: false,
    streetNumber: false,
    cityOrTown: false,
    state: false,
    zipCode: false,
    province: false,
    postalCode: false,
    emplCountry: false,
    occupation: false,
    emplStartDate: false,
    emplEndDate: false,

    outsideEmpl: false,
    nameCompany: false,
    typeAdress: false,
    streetNumb: false,
    streetCompany: false,
    addressCountry: false,
    addressCity: false,
    addressProvince: false,
    addressPostalCode: false,
    addressOccup: false,
    emplStart: false,
    emplEnd: false

  }

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

  validateLength8(data) {
    if(data.length == 8){
      this.toastrService.error('Please enter up to 8 characters.', 'Type Error!')
    }
  }

  ChangeTab3(section) {
    if (!this.us.data.application.occupationus_name) {
      this.err.addressOccup = true;
    }
    if (!this.us.data.application.employmentabroadus_name) {
      this.err.outsideEmpl = true;
    }
    if (!this.us.data.application.employerorcompanyus_name) {
      this.err.nameCompany = true;
    }
    if (!this.us.data.application.addresscompanyus_name) {
      this.err.typeAdress = true;
    }
    if (!this.us.data.application.usstreetcompany_name) {
      this.err.streetNumb = true;
    }
    if (!this.us.data.application.usstreetcompany_name) {
      this.err.streetCompany = true;
    }
    if (!this.us.data.application.cccountry_name) {
      this.err.addressCountry = true;
    }
    if (!this.us.data.application.townus_name) {
      this.err.addressCity = true;
    }

    this.us.pagesection = section;
    this.us.update()
  }


  ChangeTab2(section) {
    console.log("error", this.err.employerName);
    console.log("application_name", this.us.data.application.employerone_names.employer_name);
    this.err.emplEndDate = false;
    this.err.emplStartDate = false;
    this.err.occupation = false;
    this.err.emplCountry = false;
    this.err.postalCode = false;
    this.err.province = false;
    this.err.employerName = false;
    this.err.adressCompany = false;
    this.err.streetNumber = false;
    this.err.cityOrTown = false;
    this.err.state = false;
    this.err.zipCode = false;

    this.us.pagesection = section;
    this.us.update()
  }


  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'Z',
    altFormat: 'm-d-Y'
  };
  employeroneadd() {
    this.us.data.application.employerone_names.push({
      thisiscurrentemployment_name: '',
      employer_name: '',
      occupationus_name: '',
      employment_name: '',
      usstreetcompany1_name: '',
      employmentpostal_name: '',
      employmentstate_name: '',
      employmentzip_name: '',
      countryemployment_name: '',
      asfnumberus_name: '',
      previousfuturecityemployment_name: '',
      empmailingnumber_name: '',
      ssste_name: '',
      currentemployment_name: ''
    })
    this.us.update()
  }
}
