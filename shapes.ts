class Shape {
    color: string;
    constructor(color: string) {
        this.color = color;
    }
    getArea(): number {
        throw new Error("NotImplementedError");
    }
}
class Circle extends Shape {
    radius: number;
    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }
    getArea(): number {
        return 3.1416 * (this.radius
            + this.radius)
    }
}

const circle1 = new Circle("red", 5);
console.log(circle1.getArea());

class Rectangle extends Shape {
    width: number;
    heigth: number;
    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.heigth = height;
    }
    getArea(): number {
        return this.width * this.heigth;
    }
}

const rectangle1 = new Rectangle("blue", 4, 6);
console.log(rectangle1.getArea());