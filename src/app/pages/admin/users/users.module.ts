import { NgModule } from '@angular/core';
import { CommonModule } from '../../../common/common.module';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: UsersComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule
	],
	declarations: [
		UsersComponent,
	],
	providers: []

})

export class UsersModule { }
