import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';
import { UserService } from 'src/app/services';

@Injectable({
	providedIn: 'root'
})
export class CalcService {
	public calcs: any = [];
	public _calcs: any = {};
  public resultValues = [];
  public result;
  public counter = 2;
  public calcresult = 0;
  public resultcalc;
	constructor(private mongo: MongoService, private alert: AlertService, public us: UserService ) {
		this.calcs = mongo.get('calc', {}, (arr, obj)=>{
			this._calcs = obj;
		});
	}
	create(calc:any={}, text = 'calc has been created.') {
		if(calc._id) return this.save(calc);
		this.mongo.create('calc', calc, created=>{
			this.alert.show({ text });
		});
	}
	doc(calcId){
		if(!this._calcs[calcId]){
			this._calcs[calcId] = this.mongo.fetch('calc', {
				query: {
					_id: calcId
				}
			});
		}
		return this._calcs[calcId];
	}
	update(calc, text = 'calc has been updated.') {
		this.mongo.afterWhile(calc, _=> {
			this.save(calc, text);
		});
	}
	save(calc, text = 'calc has been updated.'){
		this.mongo.update('calc', calc, _=>{
			if(text) this.alert.show({ text, unique: calc });
		});
	}
	delete(calc, text = 'calc has been deleted.') {
		this.mongo.delete('calc', calc, _=>{
			if(text) this.alert.show({ text });
		});
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
