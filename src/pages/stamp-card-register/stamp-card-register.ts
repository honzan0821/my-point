import { StampData } from './../../model/stamp-data';
import { StampCard } from './../../model/stamp-card';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StampCardRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stamp-card-register',
  templateUrl: 'stamp-card-register.html',
})
export class StampCardRegisterPage {

  stampCard: StampCard;
  stampCount: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampCardRegisterPage');
    this.stampCard = new StampCard([]);
  }

  register() {
    let stampDatas = [];
    let stampData: StampData;
    stampData = new StampData();
    stampData.flg = true;
    stampData.registerDate = new Date();
    stampDatas.push(stampData);

    let stampCard = new StampCard(stampDatas);
    stampCard.registerDate = new Date();
    stampCard.title = 'テスト';
    stampCard.text = '２個でミニピザ、4個でパスタをプレゼント！';
  }

}
