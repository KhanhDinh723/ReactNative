// 9. Define an interface Animal with name and method sound().
// Create classes Dog and Cat implementing this interface. Each class should provide its own
// implementation of the sound() method. Create instances of Dog and Cat and call their sound() methods.
//tao interface Animal
export interface Animal {
  name: string;
  sound(): void;
}
// tao class Dog va Cat implements interface Animal
export class Dog implements Animal {
  constructor(public name: string) {}

  sound(): void {
    console.log(`${this.name}  Woof!`);
  }
}
export class Cat implements Animal {
  constructor(public name: string) {}

  sound(): void {
    console.log(`${this.name}  Meow!`);
  }
}
// Create instances of Dog and Cat
const dog = new Dog("Buddy is a dog and his sound is :");
const cat = new Cat("Whiskers is a cat and his sound is :");
// Call their sound() methods
dog.sound(); // Output: Buddy says Woof!
cat.sound(); // Output: Whiskers says Meow!