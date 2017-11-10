import { StampCardRegisterPage } from './../stamp-card-register/stamp-card-register';
import { Component } from '@angular/core';

import { StampListPage } from '../stamp-list/stamp-list';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StampListPage;
  tab2Root = StampCardRegisterPage;
  tab3Root = ContactPage;
  
  constructor() {

  }
}
