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
    console.log(`${this.name} making sound ${this.sound}`);
  }
}

const animal1 = new Animal("dog", "dog", "ghew");
animal1.makeSound();

class Animal2 {
  constructor(
    public name: string,
    public species: string,
    public sound: string
  ) {}

  makeSound() {
    console.log(`${this.name} making sound ${this.sound}`);
  }
}

const animal2 = new Animal2("cat", "cat", "mew mew");
animal2.makeSound();
