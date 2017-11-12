import { TabsPage } from './../tabs/tabs';
import { MESSAGE_DELETE, MESSAGE_CODELIST, MESSAGE_REGISTER } from './../stamp-list/stamp-list';
import { StampData } from './../../model/stamp-data';
import { StampCard } from './../../model/stamp-card';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

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

  private registerFormGroup: FormGroup;

  stampCard: StampCard;
  stampCount: number;

  stampCountCodeList: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private formBuilder: FormBuilder) {

    this.stampCardRefresh();

    this.registerFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      text: ['', Validators.required],
      stampCount: [''],
    });

  }

  stampCardRefresh() {
    this.stampCard = new StampCard([]);
    this.stampCard.stampCount = 5;
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

    // stampCardを作成してローカルストレージに追加。
    // TODO ionicのストレージに変えたい。
    this.stampCard.stampDatas = stampDatas;
    this.stampCard.stampCount = this.stampCount;
    this.stampCard.title = this.stampCard.title;
    this.stampCard.text = this.stampCard.text;
    this.stampCard.registerDate = new Date();

    let stampCards = JSON.parse(localStorage.getItem('stampcards')) as StampCard[];
    if (!stampCards) {
      stampCards = [];
    }
    stampCards.push(this.stampCard);
    localStorage.setItem('stampcards', JSON.stringify(stampCards));

    // 初期化
    this.stampCardRefresh();

    this.presentToast(null, MESSAGE_REGISTER);

    // tab切り替え
    this.navCtrl.parent.select(0);
  }

  presentToast(target: string, messageType: string) {
    let toast = this.toastCtrl.create({
      message: MESSAGE_CODELIST[messageType],
      duration: 2000
    });
    toast.present();
  }

}
