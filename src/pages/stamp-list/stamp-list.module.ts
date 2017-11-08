import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StampListPage } from './stamp-list';

@NgModule({
  declarations: [
    StampListPage,
  ],
  imports: [
    IonicPageModule.forChild(StampListPage),
  ],
})
export class StampListPageModule {}
