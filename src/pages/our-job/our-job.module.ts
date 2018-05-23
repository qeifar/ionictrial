import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OurJobPage } from './our-job';

@NgModule({
  declarations: [
    OurJobPage,
  ],
  imports: [
    IonicPageModule.forChild(OurJobPage),
  ],
})
export class OurJobPageModule {}
