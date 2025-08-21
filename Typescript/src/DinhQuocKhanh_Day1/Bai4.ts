// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.

export class Rectangle {
  constructor(public width: number, public height: number) {}
  //method

  display(): void {
    const p = (this.height + this.width) * 2;
    const a = this.width * this.height;

    console.log(
      `Width:${this.width}, Height:${this.height},"\n"S: ${a}, P:${p}`
    );
  }
}

const Bai4 = new Rectangle(5.4, 6.7);
Bai4.display();
