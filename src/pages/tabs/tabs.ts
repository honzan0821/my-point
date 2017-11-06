import { StampPage } from './../stamp/stamp';
import { NavController } from 'ionic-angular';
import { FirstPage } from './../first/first';
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = StampPage; 
  tab2Root = FirstPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
