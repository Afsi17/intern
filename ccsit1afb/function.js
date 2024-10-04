function add(a, b) {
    return a + b;
}

let result = add(10, 15)
console.log(result)
    
function mul(a, b) {
    return a * b;
}

let mult = mul(10, 15)
console.log(mult)

//arrow
var add = (a, b) => {
    var sum = a + b;
    console.log(sum)
    console.log(mul)
}
var mul = (b, c) => {
    var mult = b * c;
    console.log(mul)
}
add(43, 56)
mul(10,23)