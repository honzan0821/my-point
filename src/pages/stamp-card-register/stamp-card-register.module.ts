import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StampCardRegisterPage } from './stamp-card-register';

@NgModule({
  declarations: [
    StampCardRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(StampCardRegisterPage),
  ],
})
export class StampCardRegisterPageModule {}
