import { Component } from '@angular/core';

import { StampPage } from './../stamp/stamp';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StampPage;
  tab2Root = ContactPage;

  constructor() {

  }
}
