import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';

import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'sponsoremploument',
  templateUrl: './sponsoremploument.component.html',
  styleUrls: ['./sponsoremploument.component.scss'],
})
export class SponsoremploumentComponent implements AfterViewChecked {
  public section = 1;
  constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    private toastrService: ToastrService
  ) {}

  updateps(section: number) {
    this.us.pagesection = section;
    this.us.update();
  }

  err = {
    choice: false,
    companyName: false,
    typeAddress: false,
    streetName: false,
    cityOrTown: false,
    state: false,
    zip: false,
    province: false,
    postalCode: false,
    countryName: false,
    occupation: false,
    emplStartDate: false,
    emplEndDate: false,
    sinceUnemployed: false,
    choice1: false,
    dateRetire: false,
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

  validateLength8(data) {
    if(data.length == 8){
      this.toastrService.error('Please enter up to 8 characters.', 'Type Error!')

    }
  }


  ChangeTab2(section) {
    if (!this.us.data.application.employmentbeenunemployed_name) {
      this.err.sinceUnemployed = true;
    }

    const admi = this.us.data.application.sponsoremploymentfiveyears_names.some(
      (name) => !name.admissiontownnn_name
    );

    if (admi) {
      this.err.emplEndDate = true;
    }

    const sponsor =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.employmentstart_name
      );

    if (sponsor) {
      this.err.emplStartDate = true;
    }

    const spons =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.admissionoccupation_name
      );

    if (spons) {
      this.err.occupation = true;
    }

    const sponіs =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.employercountry_name
      );

    if (sponіs) {
      this.err.countryName = true;
    }

    const ssponіs =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.employerpostalcodeplace_name
      );

    if (ssponіs) {
      this.err.postalCode = true;
    }

    const qqwertt =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.employerprovinceplace_name
      );

    if (qqwertt) {
      this.err.province = true;
    }

    const zipcod = this.us.data.application.sponsoremploymentfiveyears_names.some(
      (name) => !name.togetherlcodeemployer_name
    );

    if (zipcod) {
      this.err.zip = true;
    }

    const jkljkl =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.togetherinceemployer_name
      );

    if (jkljkl) {
      this.err.state = true;
    }

    const city = this.us.data.application.sponsoremploymentfiveyears_names.some(
      (name) => !name.employertogether_name
    );

    if (city) {
      this.err.cityOrTown = true;
    }

    const gfdaa =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.togetheremployer_name
      );

    if (gfdaa) {
      this.err.streetName = true;
    }

    const sdfsfsdf =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.adaddressemployer_name
      );

    if (sdfsfsdf) {
      this.err.typeAddress = true;
    }

    const adasdasd =
      this.us.data.application.sponsoremploymentfiveyears_names.some(
        (name) => !name.admissiontown_name
      );

    if (adasdasd) {
      this.err.companyName = true;
    }

    if (!this.us.data.application.employmenthistory_name) {
      this.err.choice = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab3(section) {
    if (!this.us.data.application.citidatedid_name) {
      this.err.dateRetire = true;
    }
    if (!this.us.data.application.sponsoradministration_name) {
      this.err.choice1 = true;
    }

    this.us.pagesection = section;
  }

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'Z',
    altFormat: 'm-d-Y',
  };
  employmenteadd() {
    this.us.data.application.sponsoremploymentfiveyears_names.push({
      admissiontown_name: '',
      togetheremployer_name: '',
      employersponsor_name: '',
      sponsorphysicalusstetogether_name: '',
      employertogether_name: '',
      togetherinceemployer_name: '',
      togetherlcodeemployer_name: '',
      employercityplace_name: '',
      employerprovinceplace_name: '',
      employerpostalcodeplace_name: '',
      employercountry_name: '',
      employmentend_name: '',
      employmentstart_name: '',
      admissiontownnn_name: '',
      admissionoccupation_name: '',
      adaddressemployer_name: '',
    });
    this.us.update();
  }
}
