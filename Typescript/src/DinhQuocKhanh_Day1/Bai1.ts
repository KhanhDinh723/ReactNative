// 1. Create a class Person with attributes name and age. Write a method to display this information.
// Cach tao class trong ts
// Thuoc tinh + contructor + phuong thuc
// public / private / protected
// extends

export class Person {
  //tao thuoc tinh - attribute
  // name: string;
  // age: number;

  // tao contructor luu gia tri
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }

  //method
  display(): void {
    console.log(`Name:${this.name}, Age:${this.age}`);
  }
}
// Truyen thong tin vao khi da tao object
const p = new Person("Dinh Quoc Khanh", 22);
p.display();
