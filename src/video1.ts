// ? oop - class - object

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

// const dog = new Animal("dog vai", "dog", "ghew gew");
// const cat = new Animal("Cat bhai", "Cat", "mewa meaw");
// dog.makeSound();

// * patrameter properties

class Animal2 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} is making sound: ${this.sound}`);
  }
}

const dog2 = new Animal2("dog2", "kutta", "ghew");
dog2.makeSound();
