import { Component } from '@angular/core';

import { UserService } from 'src/app/services';
@Component({
  selector: 'sponsor-financical',
  templateUrl: './financical.component.html',
  styleUrls: ['./financical.component.scss']
})

export class FinancicalComponent {
  public section = 1;
  constructor(public us: UserService) { }
  public resultValues = [];
  public result;
  public counter = 2;
  public calcresult = 0;
  public resultcalc;
  public formattedValue = "";

  updateps(section: number){
    this.us.pagesection = section;
    this.us.update()
  }


  err = {
    choice: false,
    //section3
    howMany: false,
    howMany1: false,
    howMany2: false,
    //section4
    invidualAnnual: false,
    individualIncome: false,
    //section5
    taxYear: false,
    totalIncome: false,
    choice1: false,

  }


  formatInput(data){
    const string = parseFloat(data.replace(/,/g, ''));
    console.log(string);
    const formatter = new Intl.NumberFormat('en-US', {
      maximumFractionDigits:2
    })
    this.us.data.application.ustotalincome_name = formatter.format(string)
    console.log(this.us.data.application.ustotalincome_name);
    // this.us.data.application.ustotalincome_name = string.toLocaleString('en-US', {maximumSignificantDigits:3});
  }

  convertFormat(data){
    const string = parseFloat(data.replace(/,/g, ''));
    console.log(string);
    this.us.data.application.usustotalincome_name = string.toLocaleString('en-US');
  }

  convertFormat3rd(data){
    const string = parseFloat(data.replace(/,/g, ''));
    this.us.data.application.usustotalincomeus_name = string.toLocaleString('en-US');
  }

  convertToalIncome(data){
    const string = parseFloat(data.replace(/,/g, ''));
    this.us.data.application.greatcurrentindividualannual_name = string.toLocaleString('en-US');
  }

  ChangeTab5(section){
    if(!this.us.data.application.servicetranscript_name){
      this.err.choice1 = true;
    }
    if(!this.us.data.application.ustotalincome_name){
      this.err.totalIncome = true;
    }
    if(!this.us.data.application.ustexyear_name){
      this.err.taxYear = true;
    }
    this.us.pagesection = section;
  }

  ChangeTab4(section){
    if(!this.us.data.application.greaterthanorequal_name){
      this.err.invidualAnnual = true;
    }
    if(!this.us.data.application.greatcurrentindividualannual_name){
      this.err.individualIncome = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab3(section){
    if(!this.us.data.application.howmanyuspermanentresidents_name){
      this.err.howMany2 = true;
    }
    if(!this.us.data.application.howmanyustaxreturn_name){
      this.err.howMany1 = true;
    }
    if(!this.us.data.application.howmanyus_name){
      this.err.howMany = true;
    }

    this.us.pagesection = section;
  }

  ChangeTab2(section){
    if(!this.us.data.application.fin_name){
      this.err.choice = true;
    }
    this.us.pagesection = section;
  }

  calcSponsors() {
    this.us.data.application.howmanyus_name > 0 && this.resultValues.push(parseInt(this.us.data.application.howmanyus_name))
    this.us.data.application.howmanyustaxreturn_name > 0 && this.resultValues.push(parseInt(this.us.data.application.howmanyustaxreturn_name))
    this.us.data.application.howmanyuspermanentresidents_name > 0 && this.resultValues.push(parseInt(this.us.data.application.howmanyuspermanentresidents_name))
    this.result = this.resultValues.map((value) => value * 5675).reduce((a, b) => a + b, 0) + 21775


    this.counter += parseInt(this.us.data.application.howmanyus_name ? this.us.data.application.howmanyus_name : 0) + parseInt(this.us.data.application.howmanyustaxreturn_name ? this.us.data.application.howmanyustaxreturn_name : 0) + parseInt(this.us.data.application.howmanyuspermanentresidents_name ? this.us.data.application.howmanyuspermanentresidents_name : 0);
  }

  calc() {
    this.us.data.application.calcresult = parseInt(this.us.data.application.howmanyus_name) + parseInt(this.us.data.application.howmanyustaxreturn_name) + parseInt(this.us.data.application.howmanyuspermanentresidents_name) + 2;
    console.log(this.us.data.application.calcresult);
    this.us.update();
  }
}
