import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'sponsorplaceslived',
  templateUrl: './sponsorplaceslived.component.html',
  styleUrls: ['./sponsorplaceslived.component.scss']
})
export class SponsorplaceslivedComponent implements AfterViewChecked {
  public section = 1;
  public physicaltypeofaddresssponsor_name;
  public togetherdatefrom_name;
  public togetherdateto_name;
  constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    private toastrService: ToastrService,
    private dataPipe: DatePipe
    ) { }

  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }

  formatDate_physicaltypeofaddresssponsor_name(){
    this.us.data.application.physicaltypeofaddresssponsor_name = this.dataPipe.transform(this.physicaltypeofaddresssponsor_name, 'MM/dd/yyyy');
  }

  formatDate_togetherdatefrom_name(){
    this.us.data.application.togetherdatefrom_name = this.dataPipe.transform(this.togetherdatefrom_name, 'MM/dd/yyyy');
  }

  formatDate_togetherdateto_name(){
    this.us.data.application.togetherdateto_name = this.dataPipe.transform(this.togetherdateto_name, 'MM/dd/yyyy');
  }
  err = {
    typeAddress: false,
    streetNumb: false,
    cityName: false,
    stateName: false,
    zipName: false,
    provinceName: false,
    postalName: false,
    countryName: false,
    //section3
    choice1: false,
    dateMove: false,
    typeAddress1: false,
    streetNumb1: false,
    cityName1: false,
    stateName1: false,
    zipName1: false,
    provinceName1: false,
    postalName1: false,
    countryName1: false,
    dateMove1: false,
    choice2: false,
    //section4
    choice3: false,
    //section5
    typeAddress2: false,
    streetNumb2: false,
    cityName2: false,
    provinceName2: false,
    postalName2: false,
    stateName2: false,
    countryName2: false,
    zipName2: false,
    dateTo2: false,
    dateFrom2: false,
    cName2: false,
    //section6
    typeAddress3: false,
    streetNumb3: false,
    cityName3: false,
    provinceName3: false,
    postalName3: false,
    stateName3: false,
    zipName3: false,
    countryName3: false,
    dateIn3: false,
    dateOut3: false,

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

  ChangeTab6(section){
    if(!this.us.data.application.physicaladdressesus_names.togetheraddressphysical_name){
      this.err.typeAddress3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.streettogethersponsor_name){
      this.err.streetNumb3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.physicalcity_name){
      this.err.cityName3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.physicalprovincee_name){
      this.err.provinceName3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.zipphysical_name){
      this.err.postalName3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.physicalstate_name){
      this.err.stateName3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.physicalzip_name){
      this.err.zipName3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.countphysical_name){
      this.err.countryName3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.moveindate_name){
      this.err.dateIn3 = true;
    }
    if(!this.us.data.application.physicaladdressesus_names.moveoutdate_name){
      this.err.dateOut3 = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab5(section){
    if(!this.us.data.application.togetheraddress_name){
      this.err.typeAddress2 = true;
    }
    if(!this.us.data.application.streettogethersponsor_name){
      this.err.streetNumb2 = true;
    }
    if(!this.us.data.application.togethertogether_name){
      this.err.cityName2 = true;
    }
    if(!this.us.data.application.togetherprovinceplace_name){
      this.err.provinceName2 = true;
    }
    if(!this.us.data.application.togetherpostalcodeplace_name){
      this.err.postalName2 = true;
    }
    if(!this.us.data.application.togetherincesponsor_name){
      this.err.stateName2 = true;
    }
    if(!this.us.data.application.togetherlcodesponsor_name){
      this.err.zipName2 = true;
    }
    if(!this.us.data.application.physicallyliveddate_name){
      this.err.dateTo2 = true;
    }
    if(!this.us.data.application.togetherdatefrom_name){
      this.err.dateFrom2 = true;
    }
    if(!this.us.data.application.togetherdatefrom_name){
      this.err.cName2 = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab4(section){
    if(!this.us.data.application.sponsordomicile_name){
      this.err.choice3 = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab3(section){
    if(!this.us.data.application.sponsorphysicaladdress_name){
      this.err.choice1 = true;
    }
    if(!this.us.data.application.currentphysicaladdress_name){
      this.err.dateMove = true;
    }
    if(!this.us.data.application.physicaladdresssponsor_name){
      this.err.typeAddress1 = true;
    }
    if(!this.us.data.application.streetsponsorandname_name){
      this.err.streetNumb1 = true;
    }
    if(!this.us.data.application.placemailingcity_name){
      this.err.cityName1 = true;
    }
    if(!this.us.data.application.usmailingprovinceinside_name){
      this.err.stateName1 = true;
    }
    if(!this.us.data.application.mailingpostalcodezipin_name){
      this.err.zipName1 = true;
    }
    if(!this.us.data.application.mailingprovinceinsi_name){
      this.err.provinceName1 = true;
    }
    if(!this.us.data.application.gpostalcodeinsidemailin_name){
      this.err.postalName1 = true;
    }
    if(!this.us.data.application.placemailingcountry_name){
      this.err.countryName1 = true;
    }
    if(!this.us.data.application.physicaltypeofaddresssponsor_name){
      this.err.dateMove1 = true;
    }
    if(!this.us.data.application.sponsorplace_name){
      this.err.choice2 = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab2(section){
    if(!this.us.data.application.sponsortypeaddress_name){
      this.err.typeAddress = true;
    }
    if(!this.us.data.application.inphysicalstreetsponsor_name){
      this.err.streetNumb = true;
    }
    if(!this.us.data.application.physicalcitysponsorus_name){
      this.err.cityName = true;
    }
    if(!this.us.data.application.physicalusprovincesponsorin_name){
      this.err.stateName = true;
    }
    if(!this.us.data.application.usinsidezipcode_name){
      this.err.zipName = true;
    }
    if(!this.us.data.application.provinceusinside_name){
      this.err.provinceName = true;
    }
    if(!this.us.data.application.postalcodeinsideus_name){
      this.err.postalName = true;
    }
    if(!this.us.data.application.insidecountrysponsorus_name){
      this.err.countryName = true;
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
  addressadd() {
    this.us.data.application.physicaladdressesus_names.push({
      togetheraddress_name: '',
      moveindate_name: '',
      moveoutdate_name: '',
      streettogethersponsor_name: '',
      ssqstetogether_name: '',
      togethersponsorss_name: '',
      physicalstate_name: '',
      countphysical_name: '',
      physicalzip_name: '',
      zipphysical_name: '',
      physicalprovincee_name: '',
      physicalcity_name: ''
    })
    this.us.update()
  }
}
