class Square {
    constructor(a) {
        this.a = a;
    }
    static help() {
        console.log("Квадрат – це чотирикутник із усіма сторонами однакової довжини та всіма кутами прямими (90°).");
        console.log("Характеристика геометричної фігури:");
        console.log("- Довжини всіх 4 сторін: усі сторони рівні між собою.");
        console.log("- Величини всіх 4 кутів: усі кути прямі (90°).");
        console.log("- Сума довжин сторін: дорівнює чотирьом сторонам.");
        console.log("- Площа: дорівнює квадрату довжини сторони.");
    }
    length() {
        console.log("Периметр: " + (4 * this.a));
    }
    square() {
        console.log("Площа: " + (this.a * this.a));
    }
    info() {
        console.log("Обчислення квадрата:");
        console.log("- Сторона a: " + this.a);
        console.log("- Сторона b: " + this.a);
        console.log("- Сторона c: " + this.a);
        console.log("- Сторона d: " + this.a);
        console.log("- Кут 1: 90°");
        console.log("- Кут 2: 90°");
        console.log("- Кут 3: 90°");
        console.log("- Кут 4: 90°");
        console.log("- Периметр: " + (4 * this.a));
        console.log("- Площа: " + (this.a * this.a));
    }
}

class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b;
    }
    static help() {
        console.log("Прямокутник – це чотирикутник із протилежними сторонами рівними та паралельними, усі кути прямі (90°).");
        console.log("Характеристика геометричної фігури:");
        console.log("- Довжини всіх 4 сторін: протилежні сторони рівні між собою.");
        console.log("- Величини всіх 4 кутів: усі кути прямі (90°).");
        console.log("- Сума довжин сторін: дорівнює подвоєній сумі двох різних сторін.");
        console.log("- Площа: дорівнює добутку довжини на ширину.");
    }
    length() {
        console.log("Периметр: " + (2 * (this.a + this.b)));
    }
    square() {
        console.log("Площа: " + (this.a * this.b));
    }
    info() {
        console.log("Обчислення прямокутника:");
        console.log("- Сторона a: " + this.a);
        console.log("- Сторона b: " + this.b);
        console.log("- Сторона c: " + this.a);
        console.log("- Сторона d: " + this.b);
        console.log("- Кут 1: 90°");
        console.log("- Кут 2: 90°");
        console.log("- Кут 3: 90°");
        console.log("- Кут 4: 90°");
        console.log("- Периметр: " + (2 * (this.a + this.b)));
        console.log("- Площа: " + (this.a * this.b));
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        this._a = a;
        this._alpha = alpha;
        this._beta = beta;
    }
    static help() {
        console.log("Ромб – це чотирикутник із усіма сторонами однакової довжини, протилежними кутами рівними, суміжними кутами, що доповнюють один одного до 180°.");
        console.log("Характеристика геометричної фігури:");
        console.log("- Довжини всіх 4 сторін: усі сторони рівні між собою.");
        console.log("- Величини всіх 4 кутів: два протилежні кути тупі, два протилежні кути гострі.");
        console.log("- Сума довжин сторін: дорівнює чотирьом сторонам.");
        console.log("- Площа: дорівнює добутку квадрата сторони на синус тупого кута.");
    }
    length() {
        console.log("Периметр: " + (4 * this._a));
    }
    square() {
        console.log("Площа: " + (this._a * this._a * Math.sin(this._alpha * Math.PI / 180)));
    }
    info() {
        console.log("Обчислення ромба:");
        console.log("- Сторона a: " + this._a);
        console.log("- Сторона b: " + this._a);
        console.log("- Сторона c: " + this._a);
        console.log("- Сторона d: " + this._a);
        console.log("- Кут α: " + this._alpha + "°");
        console.log("- Кут β: " + this._beta + "°");
        console.log("- Кут α: " + this._alpha + "°");
        console.log("- Кут β: " + this._beta + "°");
        console.log("- Периметр: " + (4 * this._a));
        console.log("- Площа: " + (this._a * this._a * Math.sin(this._alpha * Math.PI / 180)));
    }
}

Object.defineProperties(Rhombus.prototype, {
    a: {
        get: function() { return this._a; },
        set: function(value) { this._a = value; }
    },
    alpha: {
        get: function() { return this._alpha; },
        set: function(value) { this._alpha = value; }
    },
    beta: {
        get: function() { return this._beta; },
        set: function(value) { this._beta = value; }
    }
});

class Parallelogram extends Rectangle {
    constructor(a, b, alpha, beta) {
        super(a, b);
        this.alpha = alpha;
        this.beta = beta;
    }
    static help() {
        console.log("Паралелограм – це чотирикутник із протилежними сторонами рівними та паралельними, протилежними кутами рівними.");
        console.log("Характеристика геометричної фігури:");
        console.log("- Довжини всіх 4 сторін: протилежні сторони рівні між собою.");
        console.log("- Величини всіх 4 кутів: два протилежні кути тупі, два протилежні кути гострі.");
        console.log("- Сума довжин сторін: дорівнює подвоєній сумі двох різних сторін.");
        console.log("- Площа: дорівнює добутку двох сторін на синус кута між ними.");
    }
    length() {
        console.log("Периметр: " + (2 * (this.a + this.b)));
    }
    square() {
        console.log("Площа: " + (this.a * this.b * Math.sin(this.alpha * Math.PI / 180)));
    }
    info() {
        console.log("Обчислення паралелограма:");
        console.log("- Сторона a: " + this.a);
        console.log("- Сторона b: " + this.b);
        console.log("- Сторона c: " + this.a);
        console.log("- Сторона d: " + this.b);
        console.log("- Кут α: " + this.alpha + "°");
        console.log("- Кут β: " + this.beta + "°");
        console.log("- Кут α: " + this.alpha + "°");
        console.log("- Кут β: " + this.beta + "°");
        console.log("- Периметр: " + (2 * (this.a + this.b)));
        console.log("- Площа: " + (this.a * this.b * Math.sin(this.alpha * Math.PI / 180)));
    }
}

Square.help();
Rectangle.help();
Rhombus.help();
Parallelogram.help();

let squareObj = new Square(5);
squareObj.info();

let rectangleObj = new Rectangle(4, 6);
rectangleObj.info();

let rhombusObj = new Rhombus(5, 120, 60);
rhombusObj.info();

let parallelogramObj = new Parallelogram(4, 6, 120, 60);
parallelogramObj.info();