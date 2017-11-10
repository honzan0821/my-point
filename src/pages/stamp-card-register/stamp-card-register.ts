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

  stampCard: StampCard = new StampCard([]);
  stampCount: number;

  stampCountCodeList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampCardRegisterPage');
  }

  register() {
    let stampDatas = [];
    let stampData: StampData;
    stampData = new StampData();
    stampData.flg = true;
    stampData.registerDate = new Date();
    stampDatas.push(stampData);
    for (let i = 1; i < this.stampCount; i++) {
      stampData = new StampData();
      stampData.flg = false;
      stampData.registerDate = null
      stampDatas.push(stampData);
    }

    this.stampCard.stampDatas = stampDatas;
    this.stampCard.stampCount = this.stampCount;
    this.stampCard.title = this.stampCard.title;
    this.stampCard.text = this.stampCard.text;

    let stampCards = JSON.parse(localStorage.getItem('stampcards')) as StampCard[];
    if (!stampCards) {
      stampCards = [];
    }
    stampCards.push(this.stampCard);
    localStorage.setItem('stampcards', JSON.stringify(stampCards));
    
    this.stampCard = new StampCard([]);

  }

}
