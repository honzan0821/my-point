import { TabsPage } from './../tabs/tabs';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {

  slides = [
    {
      title: "<b>マイスタンプ</b>へようこそ！",
      description: "自分専用スタンプカード作成アプリ、「マイスタンプ」へようこそ！",
      image: "assets/img/ica-slidebox-img-1.png",
    },
    {
      title: "マイスタンプって？",
      description: "<b>マイスタンプ</b>は、自分専用のスタンプカードをつくって、楽しくスタンプを押していくことができるアプリです。",
      image: "assets/img/ica-slidebox-img-2.png",
    },
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

  goToTopPage() {
    this.navCtrl.push(TabsPage);
  }

}
