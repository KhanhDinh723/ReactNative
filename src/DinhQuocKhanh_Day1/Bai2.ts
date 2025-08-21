// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.

import { Person } from "./Bai1";

export class Student extends Person {
  //Tao thuoc tinh
  grade: string;
  // Tao contructor
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  display(): void {
    console.log(`Name:${this.name},Age:${this.age},Grade:${this.grade}`);
  }
}

const stu = new Student("Dinh Quoc Khanh", 22, "University");
stu.display();
