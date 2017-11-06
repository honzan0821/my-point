import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StampPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stamp',
  templateUrl: 'stamp.html',
})
export class StampPage {

  stampField;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampPage');
    this.fetchStampCard();
  }

  fetchStampCard() {
    this.stampField = [true, false, false, false, false];
  }

}
