//Task 1
function isEmpty(obj) {
    for (k in obj) {
       return false;
    }
    return true;
};

//Task 2
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

//Task 3.1 
function sumTo(n) {
    var sum = 0;
    for (var i = 1; i < n; i++) {
        sum += i; 
    }
    return sum;
};

//Task 3.2
function sumTo(n) {
    if (n == 1) {
        return 1;
    }
    return n + sumTo(n - 1);
}

//Task 3.3 
function sumTo (n) {
    return n * (n + 1) / 2;
}

//Самый быстрый вариант решения - 3.3 по формуле, т.к. производится только три операции. 
//Самый медленный  - рекурсия, т.к. кроме n опреаций сложения имеются дополнительные вычислительные затраты на организацию вложенных вызовов.
//sumTo(100000) нельзя вычислить т.к. будет ошибка: максимальный размер стека превышен, так как обычно существует ограничение на максимальный размер стека.

//Task 4
function treeSum(arr) {
	var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (typeof arr[i] === 'object' && arr[i] !== null && arr.length !== 0) {
			sum += treeSum(arr[i]);
		} else if (typeof(arr[i]) === 'number' && !isNaN(arr[i])) {
			sum += arr[i];
		}
    }
	return sum;
}