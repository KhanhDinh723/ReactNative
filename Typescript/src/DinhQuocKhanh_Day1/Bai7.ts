// 7. Write a class User with private property name and getter/setter.

export class User {
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  constructor(private _name: string) {}
  display(): void {
    console.log(`Name: ${this._name}`);
  }
}
// Create an instance of User

const user = new User("Dinh Quoc Khanh");
user.display();
user.name = "New Name"; // Using setter
user.display(); // Display updated name
console.log(user.name); // Using getter
//user._name = "Invalid"; // Error: _name is private and cannot be accessed directly
user.name = "Invalid"; // Error: name is private and cannot be accessed directly
user.display(); // Display updated name
user.name = "New Name"; // Using setter
