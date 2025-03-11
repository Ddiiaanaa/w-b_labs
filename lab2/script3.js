function Triangular(a = 3, b = 4, c = 5) {
    if (a <= 0 || b <= 0 || c <= 0) {
        throw new Error("Сторони повинні бути додатними");
    }
    if (a + b <= c || a + c <= b || b + c <= a) {
        throw new Error("Такий трикутник не існує");
    }
    return { a, b, c };
}
console.log(Triangular());        
console.log(Triangular(6, 13, 14)); 
console.log(Triangular(2, 8, 11)); 
