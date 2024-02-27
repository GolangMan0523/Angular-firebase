import { NgModule } from '@angular/core';
import { StripeComponent } from './stripe.component';
import { StripeModule as Stripe } from "stripe-angular";
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';

@NgModule({
	imports: [
		Stripe.forRoot(environment.stripe),
		CommonModule,
		FormsModule,
		WacomModule
	],
	declarations: [
		StripeComponent
	],
	exports: [
		StripeComponent
	],
	providers: []
})

export class StripeModule { }
