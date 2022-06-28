var a = 5,
    b = 8;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a, ";", "b =", b);

var c = 10,
    d = 15;
var temp;

temp = c;
c = d;
d = temp;

console.log("c =", c, ";", "d =", d);

