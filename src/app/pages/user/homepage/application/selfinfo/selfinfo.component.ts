import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FlatpickrModule } from 'angularx-flatpickr';
@Component({
	selector: 'selfinfo',
	templateUrl: './selfinfo.component.html',
	styleUrls: ['./selfinfo.component.scss']
})
export class SelfinfoComponent{
	public section = 1;
	constructor(public us: UserService) {}
	itionaladd(){
		this.us.data.application.receiveadditionalus_names.push({
			income_name:'',
			annual_name:'',
			incomedate_name:'',
			totalannual_name:''
		})
		this.us.update()
	}
	additionalhauseholdadd(){
		this.us.data.application.additionalhausehold_names.push({
			hauseholdgiven_name:'',
			hauseholdmiddle_name:'',
			hauseholdfamily_name:'',
			hauseholddateofbirth:'',
			hauseholdanumber:''


		})
		this.us.update()
	}
	assetbelowadd(){
		this.us.data.application.assetbelow_names.push({
			assetholdername_name:'',
			assetholdermiddle_name:'',
			assetholderfamily_name:'',
			assetholdertype_name:'',
			assetholderdollars_name:''
		})
		this.us.update()
	}
	educationalhistorybelowadd(){
		this.us.data.application.educationalhistorybelow_names.push({
			schoolmane_name:'',
			degreecertificate_name:'',
			studyapplicable_name:'',
			datestarted_name:'',
			dateended_name:'',
			credithours_name:''
		})
		this.us.update()
	}
	provideinformationaboutadd(){
		this.us.data.application.provideinformationabout_names.push({
			licensetype_name:'',
			dateobtainedus_name:'',
			certificationifany_name:'',
			licensenumberifany_name:'',
			renewaldate_name:''
		})
		this.us.update()
	}
	anyotherlanguageadd(){
		this.us.data.application.anyotherlanguage_names.push({
			uslanguage_name:'',
			attendedorcurremtlyus_name:'',
			certificationobtained_name:'',
			issuedthecertification_name:'',
			expirationdateifany_name:''

		})
		this.us.update()
	}
}

