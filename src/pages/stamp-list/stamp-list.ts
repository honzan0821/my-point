import { StampData } from './../../model/stamp-data';
import { StampCard } from './../../model/stamp-card';
import { StampPage } from './../stamp/stamp';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StampListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stamp-list',
  templateUrl: 'stamp-list.html',
})
export class StampListPage {

  stampCards: StampCard[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampListPage');
    this.stampCards = this.fetchStampCard();    
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

    let stampCards:StampCard[] = [];
    stampCards.push(stampCard);
    return stampCards;
  }

  select(no:number){
    this.navCtrl.push(StampPage,{stampcard:this.stampCards[no]});
  }
}
