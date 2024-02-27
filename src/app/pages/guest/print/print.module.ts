import { NgModule } from '@angular/core';
import { PrintComponent } from './print.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from 'src/app/common';



const routes: Routes = [{
	path: '',
	component: PrintComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		PrintComponent

	],
	providers: []

})

export class PrintModule { }
