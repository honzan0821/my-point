import { StampCard } from './../../model/stamp-card';
import { StampPage } from './../stamp/stamp';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';

/**
 * Generated class for the StampListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

export const MESSAGE_REGISTER = 'register';
export const MESSAGE_MODIFY = 'modify';
export const MESSAGE_DELETE = 'delete';

export const MESSAGE_CODELIST = {
  register: ' 登録しました。',
  modify: ' 変更しました。',
  delete: ' 削除しました。',
}

@IonicPage()
@Component({
  selector: 'page-stamp-list',
  templateUrl: 'stamp-list.html',
})
export class StampListPage {

  stampCards: StampCard[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StampListPage');
    this.stampCards = this.fetchStampCard();
  }

  ionViewWillEnter(){
    // 他の方法でstampCardsを更新したいけどできていない。storeをつくるのがいいか？
    this.stampCards = this.fetchStampCard();   
  }

  fetchStampCard() {

    let stampCards = JSON.parse(localStorage.getItem('stampcards')) as StampCard[];
    return stampCards;
  }

  select(no: number) {
    this.navCtrl.push(StampPage, { stampcard: this.stampCards[no] });
  }

  delete(no: number) {
    this.showConfirm(no, this.doDelete);
  }

  doDelete(no: number) {
    this.stampCards.splice(no, 1);
    this.presentToast(String(no), MESSAGE_DELETE);
    
    localStorage.setItem('stampcards', JSON.stringify(this.stampCards));
  }

  presentToast(target: string, messageType: string) {
    let toast = this.toastCtrl.create({
      message: MESSAGE_CODELIST[messageType],
      duration: 2000
    });
    toast.present();
  }

  showConfirm(target: number, callbacks) {
    let confirm = this.alertCtrl.create({
      title: 'スタンプカードNo. ' + String(target + 1) + ' を削除しますか？',
      message: '消すと戻せません！',
      buttons: [
        {
          text: '消さない',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '消す',
          handler: () => {
            // thisがnullになるのでcallback呼び出し時はcallする。
            if (callbacks instanceof Array) {
              for (let callback in callbacks) {
                callbacks[callback].call(target);
              }
            } else {
              callbacks.call(this, target);
            }
          }
        }
      ]
    });
    confirm.present();
  }

  testData() {
    // let stampDatas = [];
    // let stampData: StampData;
    // stampData = new StampData();
    // stampData.flg = true;
    // stampData.registerDate = new Date();
    // stampDatas.push(stampData);
    // stampData = new StampData();
    // stampData.keihinText = "ミニパスタ";
    // stampDatas.push(stampData);
    // stampData = new StampData();
    // stampDatas.push(stampData);
    // stampData = new StampData();
    // stampData.keihinText = "ピザ";
    // stampDatas.push(stampData);

    // let stampCard = new StampCard(stampDatas);
    // stampCard.registerDate = new Date();
    // stampCard.title = 'テスト';
    // stampCard.text = '２個でミニピザ、4個でパスタをプレゼント！';

    // let stampCards: StampCard[] = [];
    // stampCards.push(stampCard);
  }

}
