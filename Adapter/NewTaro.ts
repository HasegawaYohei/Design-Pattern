import Taro from './Taro';
import Chairperson from './Chairperson';

export default class NewTaro extends Taro implements Chairperson {
  public organizeClass() {
    this.enjoyWithAllClassmate();
  }
}
