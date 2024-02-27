import { NgModule } from '@angular/core';
import { CommonModule } from '@common';
import { SaveComponent } from './save.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: SaveComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		SaveComponent
	],
	providers: []
	
})

export class SaveModule { }
