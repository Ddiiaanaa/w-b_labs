function triangle(val1 = 3, type1 = "leg", val2 = 4, type2 = "leg") {
    const validTypes = ["leg", "hypotenuse", "adjacent angle", "opposite angle", "angle"];
    
    if (!validTypes.includes(type1) || !validTypes.includes(type2)) {
        return "failed";
    }
    if (val1 <= 0 || val2 <= 0) {
        return "Zero or negative input";
    }
    let a, b, c, alpha, beta;

    const toRadians = (deg) => deg * Math.PI / 180;
    const toDegrees = (rad) => rad * 180 / Math.PI;

    if (type1 === "leg" && type2 === "leg") {
        a = val1;
        b = val2;
        c = Math.sqrt(a * a + b * b);
        alpha = toDegrees(Math.atan(a / b));
        beta = 90 - alpha;
    }
    else if ((type1 === "leg" && type2 === "hypotenuse") || 
             (type2 === "leg" && type1 === "hypotenuse")) {
        const leg = type1 === "leg" ? val1 : val2;
        const hyp = type1 === "hypotenuse" ? val1 : val2;
        if (leg >= hyp) return "Invalid hypotenuse";
        c = hyp;
        a = leg;
        b = Math.sqrt(c * c - a * a);
        alpha = toDegrees(Math.asin(a / c));
        beta = 90 - alpha;
    }
    else if ((type1 === "leg" && type2 === "adjacent angle") || 
             (type2 === "leg" && type1 === "adjacent angle")) {
        const leg = type1 === "leg" ? val1 : val2;
        const angle = type1 === "adjacent angle" ? val1 : val2;
        if (angle >= 90 || angle <= 0) return "Invalid angle";
        b = leg;
        beta = angle;
        alpha = 90 - beta;
        a = b * Math.tan(toRadians(beta));
        c = b / Math.cos(toRadians(beta));
    }
    else if ((type1 === "leg" && type2 === "opposite angle") || 
             (type2 === "leg" && type1 === "opposite angle")) {
        const leg = type1 === "leg" ? val1 : val2;
        const angle = type1 === "opposite angle" ? val1 : val2;
        if (angle >= 90 || angle <= 0) return "Invalid angle";
        a = leg;
        alpha = angle;
        beta = 90 - alpha;
        b = a / Math.tan(toRadians(alpha));
        c = a / Math.sin(toRadians(alpha));
    }
    else if ((type1 === "hypotenuse" && type2 === "angle") || 
             (type2 === "hypotenuse" && type1 === "angle")) {
        const hyp = type1 === "hypotenuse" ? val1 : val2;
        const angle = type1 === "angle" ? val1 : val2;
        if (angle >= 90 || angle <= 0) return "Invalid angle";
        c = hyp;
        alpha = angle;
        beta = 90 - alpha;
        a = c * Math.sin(toRadians(alpha));
        b = c * Math.cos(toRadians(alpha));
    }
    else {
        return "failed";
    }
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle dimensions";
    }
    a = Number(a.toFixed(4));
    b = Number(b.toFixed(4));
    c = Number(c.toFixed(4));
    alpha = Number(alpha.toFixed(4));
    beta = Number(beta.toFixed(4));

    console.log(`
a = ${a} 
b = ${b}
c = ${c}
alpha = ${alpha}
beta = ${beta}
`);
    return "success";
}
