let car1 = new Object();
car1.color = "blue";
car1.maxSpeed = 200;
car1.driver = new Object();
car1.driver.name = "Diana Fedyk";
car1.driver.category = "C";
car1.driver["personal limitations"] = "No driving at night";
car1.tuning = true;
car1["number of accidents"] = 0;

let car2 = {
    color: "red",
    maxSpeed: 180,
    driver: {
        name: "Diana Fedyk",
        category: "B",
        "personal limitations": null
    },
    tuning: false,
    "number of accidents": 2
};
console.log("car1:", car1);
car1.drive = function() {
    console.log("I am not driving at night");
};
car1.drive(); 

console.log("car2:", car2);
car2.drive = function() {
    console.log("I can drive anytime");
};
car2.drive(); 

function Truck(color, weight, avgSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avgSpeed = avgSpeed;
    this.brand = brand;
    this.model = model;
    this.trip = function() {
        if (!this.driver) {
            console.log("No driver assigned");
        } else {
            let message = "Driver " + this.driver.name;
            message += this.driver.nightDriving ? " drives at night" : " does not drive at night";
            message += " and has " + this.driver.experience + " years of experience";
            console.log(message);
        }
    };
}
Truck.prototype.AssignDriver = function(name, nightDriving, experience) {
    this.driver = {
        name: name,
        nightDriving: nightDriving,
        experience: experience
    };
};
let truck1 = new Truck("green", 5000, 80.5, "Volvo", "FH16");
truck1.AssignDriver("Diana Fedyk", true, 5);
console.log("truck1:", truck1);
truck1.trip(); 

let truck2 = new Truck("black", 6000, 75.3, "MAN", "TGX");
truck2.AssignDriver("Diana Fedyk", false, 3);
console.log("truck2:", truck2);
truck2.trip();