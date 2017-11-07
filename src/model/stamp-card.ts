import { StampData } from './stamp-data';

export class StampCard {
  title: string;
  text: string;
  stampDatas: StampData[];
  registerDate: Date;
  updateDate: Date;

  constructor(private stamps: StampData[]) {
    this.stampDatas = stamps;
  }
}