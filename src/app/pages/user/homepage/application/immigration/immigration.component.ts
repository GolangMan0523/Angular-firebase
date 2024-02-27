import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { FlatpickrOptions } from 'ng2-flatpickr';
import { UserService } from 'src/app/services';
import { ModalService } from 'wacom';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
	selector: 'application-immigration',
	templateUrl: './immigration.component.html',
	styleUrls: ['./immigration.component.scss']
})
export class ImmigrationComponent implements AfterViewChecked{
	public section = 1;
  public uslastarrival_name;
  public usexpirationdate_name
	constructor(
    public us: UserService,
    private changeDetector: ChangeDetectorRef,
    public modal: ModalService,
    private toastrService: ToastrService,
    private dataPipe: DatePipe
    ) {}
  ngAfterViewChecked(){
    this.changeDetector.detectChanges();
  }

  formatDate_uslastarrival_name(){
    this.us.data.application.uslastarrival_name = this.dataPipe.transform(this.uslastarrival_name, 'MM/dd/yyyy');
  }

  // formatDate_usexpirationdate_name(){
  //   this.us.data.application.usexpirationdate_name = this.dataPipe.transform(this.usexpirationdate_name, 'MM/dd/yyyy');
  // }

  validateLength27(data) {
    if(data.length == 27){
      this.toastrService.error('Please enter up to 27 characters.', 'Type Error!')
    }
  }

  validateLength12(data) {
    if(data.length == 12){
      this.toastrService.error('Please enter up to 12 characters.', 'Type Error!')
    }
  }


  validateLength11(data) {
    if(data.length == 11){
      this.toastrService.error('Please enter up to 11 characters.', 'Type Error!')
    }
  }

  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }
  public pickerOptions: FlatpickrOptions = {
    altInput: true,
    dateFormat: 'Z',
    altFormat: 'm-d-Y'
  };

  err = {
    //for cardholder = 'us' && location = 'inside'
    passNumb: false,
    issuanceCountry: false,
    expDate: false,
    // nonImmigrantVisa: false,
    abovePassport: false,
    recentlyIssuedPassp: false,
    countryOfIssuance: false,
    passpExpDate: false,
    cityOrTown: false,
    stateName: false,
    passpExpDate1: false,
    usPortOfEntry: false,
    whichTrue: false,
    formRecordNumber: false,
    formStatusDate: false,
    selectImmigratStatus: false,
    lastArrivalChanges: false,
    selectApplStatus: false,
    travelDocNumb: false,
    countryOfIssuance1: false,
    travelDocExpDate: false,

    numberAbefore: false,
    applKnowledge: false,

    resEquirement: false,
    resEquirement1: false,
    resEquirement2: false,

    apllyToApplicant: false,
    apllyToApplicant1: false,
    apllyToApplicant2: false,
    applyStatements: false,
    applyForAdj: false,

  }

  ChangeTab4(section){
    if(!this.us.data.application.residencerequirement_name){
      this.err.resEquirement = true;
    }
    if(!this.us.data.application.theforeign_name){
      this.err.resEquirement1 = true;
    }
    if(!this.us.data.application.departmentus_name){
      this.err.resEquirement2 = true;
    }

    this.us.pagesection = section;
  }
  //+
  ChangeTab1(section){
    if(!this.us.data.application.usedanyothernumber_name){
      this.err.numberAbefore = true;
    }
    if(!this.us.data.application.usfiledapetition_name){
      this.err.applKnowledge = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab5(section){
    if(!this.us.data.application.judicialproceedings_name){
      this.err.apllyToApplicant = true;
    }
    if(!this.us.data.application.embassyus_name){
      this.err.apllyToApplicant1 = true;
    }
    if(!this.us.data.application.natostatus_name){
      this.err.apllyToApplicant2 = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab6(section){
    if(!this.us.data.application.immigrationofficer_name){
      this.err.applyStatements = true;
    }
    if(!this.us.data.application.graybox_name){
      this.err.applyForAdj = true;
    }

    this.us.pagesection = section;
  }

  //+
  ChangeTab(section){
    if(!this.us.data.application.passportnumberus_name){
      this.err.passNumb = true;
    }
    if(!this.us.data.application.uscountry_name){
      this.err.issuanceCountry = true;
    }
    if(!this.us.data.application.expirationdateus_name){
      this.err.expDate = true;
    }
    // if(!this.us.data.application.visanumberus_name){
    //   this.err.nonImmigrantVisa = true;
    // }
    if(!this.us.data.application.abovepassport_name){
      this.err.abovePassport = true;
    }
    if(!this.us.data.application.uspassportnumber_name){
      this.err.recentlyIssuedPassp = true;
    }
    if(!this.us.data.application.uscountryofissuance_name){
      this.err.countryOfIssuance = true;
    }
    if(!this.us.data.application.usexpirationdate_name){
      this.err.passpExpDate = true;
    }
    if(!this.us.data.application.uscityoftawn_name){
      this.err.cityOrTown = true;
    }
    if(!this.us.data.application.usstate_name){
      this.err.stateName = true;
    }
    if(!this.us.data.application.uslastarrival_name){
      this.err.passpExpDate1 = true;
    }
    if(!this.us.data.application.usportofentry_name){
      this.err.usPortOfEntry = true;
    }
    if(!this.us.data.application.usarrivedinthe_name){
      this.err.whichTrue = true;
    }
    if(!this.us.data.application.formrecordnumber_name){
      this.err.formRecordNumber = true;
    }
    if(!this.us.data.application.form94_name){
      this.err.formStatusDate = true;
    }
    if(!this.us.data.application.form94middleform_name){
      this.err.selectImmigratStatus = true;
    }
    if(!this.us.data.application.uslastarrivalll_name){
      this.err.lastArrivalChanges = true;
    }
    if(!this.us.data.application.form94middleqqq_name){
      this.err.selectApplStatus = true;
    }
    if(!this.us.data.application.travelpassportnumberus_name){
      this.err.travelDocNumb = true;
    }
    if(!this.us.data.application.traveluscountry_name){
      this.err.countryOfIssuance1 = true;
    }
    if(!this.us.data.application.travelexpirationdateus_name){
      this.err.travelDocExpDate = true;
    }

    this.us.pagesection = section;
  }

	anumberadd(){
		this.us.data.application.anumber_names.push({
			a_number_name:''})
		this.us.update()

	}
	addanumber(){
		this.us.data.application.anumber_names.push({
			usenternumber_name:''
		})
		this.us.update()
	}
}

