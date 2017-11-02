import Chairperson from './Chairperson';
import NewTaro from './NewTaro';

export default class Teacher {
  public main() {
    const chairperson: Chairperson = new NewTaro();
    chairperson.organizeClass();
  }
}

const teacher: Teacher = new Teacher();
teacher.main();