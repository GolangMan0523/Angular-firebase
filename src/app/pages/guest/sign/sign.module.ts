import { NgModule } from '@angular/core';
import { CommonModule } from '@common';
import { SignComponent } from './sign.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: SignComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		SignComponent
	],
	providers: []
	
})

export class SignModule { }
