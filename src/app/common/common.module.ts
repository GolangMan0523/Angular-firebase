import { NgModule } from '@angular/core';
import { CommonModule as Common } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';
import { DateComponent } from './date/date.component';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
@NgModule({
  declarations: [DateComponent],
  exports: [/* filters */ DateComponent, FormsModule, WacomModule, Common],
  imports: [Ng2FlatpickrModule, FormsModule, WacomModule, Common],
})
export class CommonModule {}
