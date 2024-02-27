import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { Toast, ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'sponsorfamily',
  templateUrl: './sponsorfamily.component.html',
  styleUrls: ['./sponsorfamily.component.scss']
})
export class SponsorfamilyComponent implements AfterViewChecked {
  public section = 1;
  public littleaboutdateofbirth_name;
  public nowabautfatherbirth_name;
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

  formatDate_littleaboutdateofbirth_name(){
    this.us.data.application.littleaboutdateofbirth_name = this.dataPipe.transform(this.littleaboutdateofbirth_name, 'MM/dd/yyyy');
  }

  formatDate_nowabautfatherbirth_name(){
    this.us.data.application.nowabautfatherbirth_name = this.dataPipe.transform(this.nowabautfatherbirth_name, 'MM/dd/yyyy');
  }

  err = {
    //section2
    momGName: false,
    momFName: false,
    momBirthDate: false,
    momBirthCountry: false,
    //section3
    dadGName: false,
    dadFName: false,
    dadBirthDate: false,
    dadBirthCountry: false,
    //section4
    choice: false,
    gName1: false,
    fName1: false,
    marriageEnd: false,
    countMarriage: false,
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


  ChangeTab4(section){
    if(!this.us.data.application.marriedmarried_name){
      this.err.marriageEnd = true;
    }
    if(!this.us.data.application.priormarriages_name){
      this.err.choice = true;
    }
    if(!this.us.data.application.marriagessponsor_names.mothersponsor_name){
      this.err.gName1 = true;
    }
    if(!this.us.data.application.marriagessponsor_names.familysponsor_name){
      this.err.fName1 = true;
    }
    if(!this.us.data.application.marriagessponsor_names.marriagedatesponsor_name){
      this.err.marriageEnd = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab3(section){
    if(!this.us.data.application.nowabautfathername_name){
      this.err.dadGName = true;
    }
    if(!this.us.data.application.nowabautfatherlastname_name){
      this.err.dadFName = true;
    }
    if(!this.us.data.application.nowabautfatherbirth_name){
      this.err.dadBirthDate = true;
    }
    if(!this.us.data.application.nowabautfathercountry_name){
      this.err.dadBirthCountry = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab2(section){
    if(!this.us.data.application.splittleaboutname_name){
      this.err.momGName = true;
    }
    if(!this.us.data.application.splittleaboutfamilyname_name){
      this.err.momFName = true;
    }
    if(!this.us.data.application.littleaboutdateofbirth_name){
      this.err.momBirthDate = true;
    }
    if(!this.us.data.application.littleaboutcountryofbirth_name){
      this.err.momBirthCountry = true;
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
  marriagesponsoradd() {
    this.us.data.application.marriagessponsor_names.push({
      mothersponsor_name: '',
      middlesponsor_name: '',
      familysponsor: '',
      marriagedatesponsor_name: '',
    })
    this.us.update()
  }

}
