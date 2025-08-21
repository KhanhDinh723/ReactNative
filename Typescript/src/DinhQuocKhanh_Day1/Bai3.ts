// 3. Create a class Car with properties
//brand, model, year. Write a method to show car info.

export class Car {
  constructor(
    public brand: string,
    public model: string,
    public year: number
  ) {}

  //{} chinh la this.brand = brand ( contructor )
  display(): void {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`
    );
  }
}
const car1 = new Car("Toyota1", "Camry", 2021);
const car2 = new Car("Toyota2", "Camry", 2022);
const car3 = new Car("Toyota3", "Camry", 2023);
const car4 = new Car("Toyota4", "Camry", 2024);

car1.display();
car2.display();
car3.display();
car4.display();
