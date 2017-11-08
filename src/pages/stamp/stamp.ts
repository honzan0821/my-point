import { StampData } from './../../model/stamp-data';
import { StampCard } from './../../model/stamp-card';
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

  stampCard: StampCard;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.stampCard = navParams.get('stampcard');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampPage');
    // this.stampCard = this.fetchStampCard();
  }

  fetchStampCard() {
    let stampDatas = [];

    let stampData: StampData;
    stampData = new StampData();
    stampData.flg = true;
    stampData.registerDate = new Date();
    stampDatas.push(stampData);
    stampData = new StampData();
    stampData.keihinText = "ミニパスタ";
    stampDatas.push(stampData);
    stampData = new StampData();
    stampDatas.push(stampData);
    stampData = new StampData();
    stampData.keihinText = "ピザ";
    stampDatas.push(stampData);

    let stampCard = new StampCard(stampDatas);
    stampCard.registerDate = new Date();
    stampCard.title = 'テスト';
    stampCard.text = '２個でミニピザ、4個でパスタをプレゼント！';
    return stampCard;
  }

  stamp() {
    let target = this.stampCard.stampDatas;
    for (let i = 0; i < target.length; i++) {
      if (!target[i].flg) {
        target[i].flg = true;
        target[i].registerDate = new Date();
        return;
      }
    }
  }

  unstamp() {
    let target = this.stampCard.stampDatas;
    for (let i = target.length - 1; i >= 0; i--) {
      if (target[i].flg) {
        target[i].flg = false;
        target[i].registerDate = null;
        return;
      }
    }
  }

}
