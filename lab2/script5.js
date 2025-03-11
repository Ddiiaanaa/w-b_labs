function Painter(color) {
    return function(obj) {
        if (obj && obj.type) {
            console.log(color + " " + obj.type);
        } else {
            console.log("No ‘type’ property occurred!");
        }
    };
}
let PaintBlue = Painter("Blue");
let PaintRed = Painter("Red");
let PaintYellow = Painter("Yellow");

let obj1 = { maxSpeed: 280, type: "Sportcar", color: "magenta" };
let obj2 = { type: "Truck", avgSpeed: 90, "load capacity": 2400 };
let obj3 = { maxSpeed: 180, color: "purple", isCar: true };

console.log("Object1:");
PaintBlue(obj1);
PaintRed(obj1);
PaintYellow(obj1);

console.log("\nObject2:");
PaintBlue(obj2);
PaintRed(obj2);
PaintYellow(obj2);

console.log("\nObject3:");
PaintBlue(obj3);
PaintRed(obj3);
PaintYellow(obj3);