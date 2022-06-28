// Задание 1
function isEmpty(obj) {
   for (var key in obj) {
       return false;
   }

   return true;
}

isEmpty({});

// Задание 2
var x = +prompt('Введите число x'),
    n = +prompt('Введите степень n');

if (n < 1 || (n % 1)) {
    alert('Степень ' + n + ' не поддерживается, введите натуральное целое число');
} else {
    alert(pow(x, n));
}

function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

// Задание 3 (вариант 1)
function sumTo(n) {
    var sum = 0;

    for (var i = n; i >= 1; i--) {
        sum += i;
    }

    return sum;
}

sumTo(3); // 6

// Задание 3 (вариант 2)
function sumTo(n) {
    if (n === 1) {
        return 1;
    }

    return n + sumTo(n - 1);
}

sumTo(3); // 6

// Задание 3 (вариант 3)
function sumTo(n) {
    return (1 + n) / 2 * n;
}

sumTo(3); // 6

// Задание 4
function treeSum(arr) {
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        var numberOrArr = arr[i];

        if ((typeof numberOrArr === 'number') && numberOrArr) {
            sum += numberOrArr;
        } else if (typeof numberOrArr === 'object' && numberOrArr && numberOrArr.length) {
            sum += treeSum(numberOrArr);
        }

    //  if (numberOrArr) {
    //      if (typeof numberOrArr === 'number') {
    //          sum += numberOrArr;
    //      } else if (typeof numberOrArr === 'object' && numberOrArr.length) {
    //          sum += treeSum(numberOrArr);
    //      }
    //  }
    }

    return sum;
}

treeSum([
    5, 7,
    [4, [2], 8, [1, 3], 2],
    [9, []],
    1, 8
]); // 50