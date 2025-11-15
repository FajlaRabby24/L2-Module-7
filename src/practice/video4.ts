class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta ghumai`);
  }
}

class Student extends Person {
  doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study koe`);
  }
}

class Teacher extends Person {
  takeClass(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta class nei`);
  }
}

const isStudent = (user: Person) => {
  return user instanceof Student;
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(5);
  } else if (isTeacher(user)) {
    user.takeClass(6);
  } else {
    user.getSleep(7);
  }
};

const student1 = new Student("Mr. student");
const teacher1 = new Teacher("Mr. teacher");
const person1 = new Person("Mr. Person");

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
