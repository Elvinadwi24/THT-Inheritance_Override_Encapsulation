class Shape {
    numSides;
    sideLenghts;

    setSides(sides) {
        this.sides = sides;
    }

    setSideLenghts(Sidelenghts) {
        this.Sidelenghts = Sidelenghts;
    }

    getNumSides() {
        return this.sides;
    }

    getSideLenghts() {
        return this.Sidelenghts = this.Sidelenghts;
    }

    getPerimeter() {
        return 2 * this.sides + 2 * this.Sidelenghts;
    }

    getArea() {
        return this.sides * this.Sidelenghts;
    }
}

console.log('====== soal selanjut nya =======')

class Triangle extends Shape {
    hitungJumlah() {
        console.log('berapa yaa!!!');
    }
}

class Rectangle extends Shape {
    hitungJumlah() {
        console.log('hasillnyaa!!!');
    }
}

class Circle extends Shape {
    hitungJumlah() {
        console.log('jumlahnyaa!!!');
    }
}

const m = new Shape();
m.setSides(4);
m.setSideLenghts(8);
const mPerimeter = m.getPerimeter();
const mArea = m.getArea();
console.log(m.getNumSides());
console.log(m.getSideLenghts());
console.log(m.getPerimeter());
console.log(m.getArea());


const shape = new Shape();
const triangle = new Triangle();
const rectangle = new Rectangle();
const circle = new Circle();


triangle.hitungJumlah();
rectangle.hitungJumlah();
circle.hitungJumlah();
