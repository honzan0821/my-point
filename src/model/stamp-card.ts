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
    this.stampCurrentCount = 1;
  }
}