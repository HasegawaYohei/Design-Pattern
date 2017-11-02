import Chairperson from './Chairperson';
import Hanako from './Hanako';

export default class Teacher2 {
  public main() {
    const chairperson: Chairperson = new Hanako();
    chairperson.organizeClass();
  }
}

const teacher: Teacher2 = new Teacher2();
teacher.main();