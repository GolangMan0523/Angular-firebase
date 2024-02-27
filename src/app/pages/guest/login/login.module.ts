import { NgModule } from '@angular/core';
import { CommonModule } from '@common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { GreencardholderComponent } from './greencardholder/greencardholder.component';
import { CardholderComponent } from './cardholder/cardholder.component';
import { ApplicationComponent } from './application/application.component';
import { PhysicaladdressComponent } from './physicaladdress/physicaladdress.component';
import { ChildrenComponent } from './children/children.component';
import { OwnerComponent } from './owner/owner.component';
import { MarriageComponent } from './marriage/marriage.component';
import { PriceComponent } from './price/price.component';
import { RegisterComponent } from './register/register.component';
import { VisaComponent } from './visa/visa.component';
import { GreenboardsupportComponent } from './greenboardsupport/greenboardsupport.component';
import { MarriageterminatedComponent } from './marriageterminated/marriageterminated.component';


const routes: Routes = [{
	path: '',
	component: LoginComponent
}];

@NgModule({
	imports: [
	RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		LoginComponent,
		GreencardholderComponent,
		CardholderComponent,
		ApplicationComponent,
		PhysicaladdressComponent,
		ChildrenComponent,
		OwnerComponent,
		MarriageComponent,
		PriceComponent,
		RegisterComponent,
		VisaComponent,
		GreenboardsupportComponent,
		MarriageterminatedComponent,
	],
	providers: []
	
})

export class LoginModule { }
