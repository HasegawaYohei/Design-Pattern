import Chairperson from './Chairperson';
import Taro from './Taro';

export default class Hanako implements Chairperson {
  private taro: Taro;

  constructor() {
    this.taro = new Taro();
  }

  public organizeClass() {
    this.taro.enjoyWithAllClassmate();
  }
}