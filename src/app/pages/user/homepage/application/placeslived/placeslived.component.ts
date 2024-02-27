import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { ModalService } from 'wacom';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'application-placeslived',
  templateUrl: './placeslived.component.html',
  styleUrls: ['./placeslived.component.scss']
})
export class PlaceslivedComponent implements AfterViewChecked {
  public section = 1;
  public pagesection = 1;
  public insideusdate_name;
  public usoneyearindate_name;
  public usoneyearoutdate_name;


  constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    public modal: ModalService,
    private toastrService: ToastrService,
    private dataPipe: DatePipe
    ) { }

  updateps(section: number) {
    this.us.pagesection = section;
    this.us.update()
  }


  formatDate_usoneyearindate_name(){
    this.us.data.application.usoneyearindate_name = this.dataPipe.transform(this.usoneyearindate_name, 'MM/dd/yyyy');
  }

  formatDate_usoneyearoutdate_name(){
    this.us.data.application.usoneyearoutdate_name = this.dataPipe.transform(this.usoneyearoutdate_name, 'MM/dd/yyyy');
  }

  err = {
    adrType: false,
    strName: false,
    cityName: false,
    stateName: false,
    zipName: false,

    choice: false,
    currData: false,
    adrType1: false,
    strName1: false,
    cityName1: false,
    stateName1: false,
    zipName1: false,
    moveDate: false,

    adrType2: false,
    strName2: false,
    cityName2: false,
    provinceName2: false,
    postalCodeName2: false,
    countryName2: false,
    choice2: false,
    //
    adrType3: false,
    strName3: false,
    zipName3: false,
    cityName3: false,
    provinceName3: false,
    postalCodeName3: false,
    countryName3: false,

    adrType4: false,
    strName4: false,
    cityName4: false,
    stateName4: false,
    zipName4: false,
    //
    cityName5: false,
    province5: false,
    postalCode5: false,
    countryName5: false,
    zipName5: false,
    moveInDate5: false,
    moveOutDate5: false,
    //
    adrType6: false,
    strName6: false,
    cityName6: false,
    province6: false,
    postalCode6: false,
    countryName6: false,
    moveInDate6: false,
    moveOutDate6: false,
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

  ChangeTab6(section) {
    if (!this.us.data.application.usoneyearaddress_name) {
      this.err.adrType6 = true;
    }
    if (!this.us.data.application.usoneyearnumber_name) {
      this.err.strName6 = true;
    }
    if (!this.us.data.application.usoneyearcity_name) {
      this.err.cityName6 = true;
    }
    if (!this.us.data.application.usoneyearprovince_name) {
      this.err.province6 = true;
    }
    if (!this.us.data.application.usoneyearcode_name) {
      this.err.postalCode6 = true;
    }
    if (!this.us.data.application.usoneyearcountry_name) {
      this.err.countryName6 = true;
    }
    if (!this.us.data.application.usoneyearindate_name) {
      this.err.moveInDate6 = true;
    }
    if (!this.us.data.application.usoneyearoutdate_name) {
      this.err.moveOutDate6 = true;
    }

    this.us.pagesection = section;
    this.us.update()
  };

  ChangeTab5(section) {
    if (!this.us.data.application.typeofaddress_names.previousaddress_name) {
      this.err.adrType4 = true;
    }
    if (!this.us.data.application.typeofaddress_names.usplaces_name) {
      this.err.strName4 = true;
    }
    if (!this.us.data.application.typeofaddress_names.previousfuturecity_name) {
      this.err.cityName4 = true;
    }
    if (!this.us.data.application.typeofaddress_names.previousfuturestate_name) {
      this.err.stateName4 = true;
    }
    if (!this.us.data.application.typeofaddress_names.previousfuturezyzip_name) {
      this.err.zipName5 = true;
    }
    if (!this.us.data.application.typeofaddress_names.previousfuturefuturecity_name) {
      this.err.cityName5 = true;
    }
    if (!this.us.data.application.typeofaddress_names.previousfuturefuturecity_name) {
      this.err.province5 = true;
    }
    if (!this.us.data.application.typeofaddress_names.futurepreviousfuturezyzip_name) {
      this.err.postalCode5 = true;
    }
    if (!this.us.data.application.typeofaddress_names.recentcountryfuture_name) {
      this.err.countryName5 = true;
    }
    if (!this.us.data.application.typeofaddress_names.previousmovein_name) {
      this.err.moveInDate5 = true;
    }
    if (!this.us.data.application.typeofaddress_names.previousmoveout_name) {
      this.err.moveOutDate5 = true;
    }

    this.us.pagesection = section;
    this.us.update()
  };

  ChangeTab4(section) {
    if (!this.us.data.application.physicaladdress_name) {
      this.err.adrType2 = true;
    }
    if (!this.us.data.application.physicalstreet_name) {
      this.err.strName2 = true;
    }
    if (!this.us.data.application.physicalcity_name) {
      this.err.cityName2 = true;
    }
    if (!this.us.data.application.physicalprovince_name) {
      this.err.provinceName2 = true;
    }
    if (!this.us.data.application.physicalpostalcode_name) {
      this.err.postalCodeName2 = true;
    }
    if (!this.us.data.application.physicalcountry_name) {
      this.err.countryName2 = true;
    }
    if (!this.us.data.application.country_name) {
      this.err.choice2 = true;
    }
    if (!this.us.data.application.subphysicaladdress_name) {
      this.err.adrType3 = true;
    }
    if (!this.us.data.application.subphysicalstreet_name) {
      this.err.strName3 = true;
    }
    if (!this.us.data.application.subphysicalpostalcode_name) {
      this.err.zipName3 = true;
    }
    if (!this.us.data.application.subphysicalcity_name) {
      this.err.cityName3 = true;
    }
    if (!this.us.data.application.salprovince_name) {
      this.err.provinceName3 = true;
    }
    if (!this.us.data.application.codecod_name) {
      this.err.postalCodeName3 = true;
    }
    if (!this.us.data.application.subphysicalcountry_name) {
      this.err.countryName3 = true;
    }

    this.us.pagesection = section;
    this.us.update()
  };

  ChangeTab3(section) {
    if (!this.us.data.application.mailingaddressus_name) {
      this.err.choice = true;
    }
    if (!this.us.data.application.currentphysicaladdressus_name) {
      this.err.currData = true;
    }
    if (!this.us.data.application.insideusaddress_name) {
      this.err.adrType1 = true;
    }
    if (!this.us.data.application.insideusnumber_name) {
      this.err.strName1 = true;
    }
    if (!this.us.data.application.insideusgcity_name) {
      this.err.cityName1 = true;
    }
    if (!this.us.data.application.insideusstate_name) {
      this.err.stateName1 = true;
    }
    if (!this.us.data.application.insideuscode_name) {
      this.err.zipName1 = true;
    }
    if (!this.us.data.application.insideusdate_name) {
      this.err.moveDate = true
    }

    this.us.pagesection = section;
    this.us.update()
  };

  ChangeTab2(section) {
    if (!this.us.data.application.mailingaddress_name) {
      this.err.adrType = true;
    }
    if (!this.us.data.application.mailingnumber_name) {
      this.err.strName = true;
    }
    if (!this.us.data.application.mailingcity_name) {
      this.err.cityName = true;
    }
    if (!this.us.data.application.insidemailingprovince_name) {
      this.err.stateName = true;
    }
    if (!this.us.data.application.mailingpostalcode_name) {
      this.err.zipName = true;
    }

    this.us.pagesection = section;
    this.us.update()
  };

  ngAfterViewChecked() {
    this.changeDetector.detectChanges();
  }
  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'Z',
    altFormat: 'm-d-Y'
  };
  typeofaddress() {
    this.us.data.application.typeofaddress_names.push({
      previousmovein_name: '',
      usplaces_name: '',
      previousmoveout_name: '',
      numberaptste_name: '',
      stedf_name: '',
      previousfuturecityq_name: '',
      prweviousfuturestate_name: '',
      previousfuturewzyzip_name: '',
      futurfuturestate_name: '',
      futurepreviousfutu_name: '',
      recenstcountryfuture_name: '',
      previousaddress_name: ''
    })
    this.us.update()
  }
}
