function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
};

var x = prompt('Введите основание!');
var n;
while (!(n = +prompt('Введите показатель степени')) || !(n > 0) || (n % 1 != 0)) {
        alert('Значение должно целым положительным числом!');
    };
alert (pow(x, n));
