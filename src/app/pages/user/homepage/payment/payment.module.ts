import { NgModule } from '@angular/core';
import { PaymentComponent } from './payment.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
	path: '',
	component: PaymentComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)

	],
	declarations: [

	],
	providers: []

})

export class PaymentModule { }
