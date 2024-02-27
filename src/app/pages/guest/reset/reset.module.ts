import { NgModule } from '@angular/core';
import { CommonModule } from '@common';
import { ResetComponent } from './reset.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ResetComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		ResetComponent
	],
	providers: []
	
})

export class ResetModule { }
