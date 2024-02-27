import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'sponsorimmigration',
  templateUrl: './sponsorimmigration.component.html',
  styleUrls: ['./sponsorimmigration.component.scss']
})
export class SponsorimmigrationComponent implements AfterViewChecked {
  public section = 1;
  constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    private toastrService: ToastrService
    ) { }

  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }

  err = {
    certificateAvailable: false,
    choice: false,
    certifNumber: false,
    issuancePlace: false,
    issuanDate: false,
    choice1: false,
    //section3
    cityName: false,
    stateName: false,
    choice2: false,
    //section4
    choice3: false,
    gName: false,
    fName: false,
    cityName1: false,
    state1: false,
    dateName: false,
    resultName: false,
    //section5
    choice4: false,
    gName1: false,
    fName1: false,
    relationships: false,
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

  ChangeTab5(section){
    if(!this.us.data.application.sponsorrelative_names.srelationship_name){
      this.err.relationships = true;
    }
    if(!this.us.data.application.sponsorrelative_names.mother_smiddle_name){
      this.err.fName1 = true;
    }
    if(!this.us.data.application.sponsorrelative_names.smother_name){
      this.err.gName1 = true;
    }
    if(!this.us.data.application.sponsoralsosubmitting_name){
      this.err.choice4 = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab4(section){

    const green = this.us.data.application.sponsoralienprevious_names.some(
      (name) => !name.greenaliencity_name
    );

    if (green) {
      this.err.dateName = true;
    }


    const resul = this.us.data.application.sponsoralienprevious_names.some(
      (name) => !name.aliengreen_name
    );

    if (resul) {
      this.err.resultName = true;
    }

    const states = this.us.data.application.sponsoralienprevious_names.some(
      (name) => !name.alienstate_name
    );

    if (states) {
      this.err.state1 = true;
    }

    const cityn = this.us.data.application.sponsoralienprevious_names.some(
      (name) => !name.aliencitygreen_name
    );

    if (cityn) {
      this.err.cityName1 = true;
    }



    const namef = this.us.data.application.sponsoralienprevious_names.some(
      (name) => !name.familyalien_name
    );

    if (namef) {
      this.err.fName = true;
    }


    const nameg = this.us.data.application.sponsoralienprevious_names.some(
      (name) => !name.alien_name
    );

    if (nameg) {
      this.err.gName = true;
    }

    const namealien = this.us.data.application.sponsoralienprevious_names.some(
      (name) => !name.alien_name
    );

    if (namealien) {
      this.err.gName = true;
    }

    this.us.pagesection = section;

  }

  ChangeTab3(section){
    // if(!this.us.data.application.sponsorapp_name){
    //   this.err.choice2 = true;
    // }

    if(!this.us.data.application.applicationstate_name){
      this.err.stateName = true;
    }

    if(!this.us.data.application.admissiontown_name){
      this.err.cityName = true;
    }


    this.us.pagesection = section;
  }

  ChangeTab2(section){
    if(!this.us.data.application.ussponsoradministration_name){
      this.err.choice1 = true;
    }
    if(!this.us.data.application.certificateissuancedate_name){
      this.err.issuanDate = true;
    }
    if(!this.us.data.application.certificatenumber_name){
      this.err.certifNumber = true;
    }
    if(!this.us.data.application.sponsorobtained_name){
      this.err.choice = true;
    }
    if(!this.us.data.application.sponsoradministration_name){
      this.err.certificateAvailable = true;
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
  relativeadd() {
    this.us.data.application.sponsorrelative_names.push({
      smother_name: '',
      smother_middle_name: '',
      smother_family_name: '',
      srelationship_name: '',
    })
    this.us.update()
  }

  previousadd() {
    this.us.data.application.sponsoralienprevious_names.push({
      alien_name: '',
      alienmiddle_name: '',
      familyalien_name: '',
      aliencitygreen_name: '',
      alienstate__name: '',
      greenaliencity_name: '',
      aliengreen_name: '',

    })
    this.us.update()
  }
}
