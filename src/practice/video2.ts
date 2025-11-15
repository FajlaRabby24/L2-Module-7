class Person {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  getSleep(numOfSleep: number) {
    console.log(`${this.name} ${numOfSleep} ghonta ghumai`);
  }
}

class Student extends Person {
  rollNo: number;

  constructor(name: string, age: number, address: string, rollNo: number) {
    super(name, age, address);
    this.rollNo = rollNo;
  }

  getStudy(numOfStudy: number) {
    console.log(`${this.name} ${numOfStudy} study kore`);
  }
}

class Teacher extends Person {
  getTeaching(numOfTech: number) {
    console.log(`${this.name} ${numOfTech} ghonta teaching korai`);
  }
}

const person1 = new Person("Fajla Rabby", 21, "Dhaka");
const student1 = new Student("Pariha", 12, "Dhaka", 22);
const teacher1 = new Teacher("Rafic", 32, "Dhaka");

person1.getSleep(8);
student1.getStudy(5);
teacher1.getTeaching(7);
