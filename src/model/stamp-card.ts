import { StampData } from './stamp-data';

export class StampCard {
  title: string;
  text: string;
  stampDatas: StampData[];
  stampCount: number;
  stampCurrentCount: number;
  registerDate: Date;
  updateDate: Date;

  constructor(private stamps: StampData[]) {
    this.stampDatas = stamps;
    this.stampCount = stamps.length;
    //　ionicだと値で初期化しておかないと変更検知してもらえないようだ。。。
    this.stampCurrentCount = 1;
    this.stampCount = 0;
    this.title = '';
    this.text = '';
  }
}