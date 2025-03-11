function PiMultiplier(multiplier) {
    return function() {
        return Math.PI * multiplier;
    };
}
let doublePi = PiMultiplier(2);
let threeHalvesPi = PiMultiplier(1.5);
let halfPi = PiMultiplier(0.5);
console.log(doublePi());      
console.log(threeHalvesPi()); 
console.log(halfPi());        