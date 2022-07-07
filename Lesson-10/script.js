/*Задание 1: Переписать задачу с использованием перебирающего метода массивов:
    function filterNumbersArr(numbers) {
        var newArr = [];

        for (var i = 0; i < numbers.length; i++) {
            var el = numbers[i];

            if (el > 0) {
                newArr[newArr.length] = el;
            }
        }

        return newArr;
    }

    filterNumbersArr([-1, 0, 2, 34, -2]);*/

function filterNumbersArr(numbers) {
    var filteredArr = numbers.filter(function(filterValue) {
        return filterValue > 0;
    })
    return filteredArr;
};

console.log(filterNumbersArr([-1, 0, 2, 34, -2]));


//Задание 2: Написать функцию, принимающую массив чисел и возвращающую первое найденное положительное число.

// 2.1
function firstPositive (arr) {
    var positive = arr.find(function(value) {
        return value > 0;
    })
    return positive;
};

console.log(firstPositive([-1, 0, 2, 34, -2]));

//2.2
function firstPositive2 (arr) {
    var value = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            value = arr[i]; break;
        } 
    }
    return value;
};

console.log(firstPositive2([-1, 0, 2, 34, -2]));


/*Задание 3:
Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).
Функция должна работать следущим образом:
isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false*/

function isPalindrome(word) {
    arr = word.toLowerCase().split('');
    if (arr[0] !== arr[arr.length-1]);
    else {
        for(i = 0; i < arr.length; i++) {
            var count = 1;
            if (arr[i] == arr[arr.length - count]) {
                count--;
                return true;
            }else {
                return false;
            }
        }
    };
    return false;
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));
console.log(isPalindrome('арозаупаланалапуазора'));
console.log(isPalindrome('многофункциональный'));


/*Задание 4:
Написать функцию, которая будет определять, являются ли переданные в нее слова анаграммами (напр. кот и отк).
Регистр в словах учитываться не должен.
Функция должна работать следущим образом:
areAnagrams('кот', 'Отк'); // true
areAnagrams('кот', 'атк'); // false
areAnagrams('кот', 'отко'); // false*/

function areAnagrams(wordOne, wordTwo) {
    newWordOne = wordOne.toLowerCase().split('').sort().join('');
    newWordTwo = wordTwo.toLowerCase().split('').sort().join('');
    if (newWordOne === newWordTwo) {
        return true;
    } else {
        return false;
    }
};

console.log(areAnagrams('кот', 'Отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));


/*Задание 5:
Написать функцию, которая будет возвращать новый массив с под-массивами определенной длины, полученными из исходного
массива.
Функция должна работать следующим образом:
    divideArr([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
    divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3); // [[1, 2, 3], [4, 5, 6], [7, 8]]
    divideArr([1, 2, 3, 4, 5], 0); // [1, 2, 3, 4, 5]*/

function divideArr(arr, n) {
    if (n == 0) {
        return arr;
    } else {
        var newArr = [];
        for (var i = 0; i < arr.length; ) {
            var subArr = arr.splice(i, n);
            newArr.push(subArr);
        }
        return newArr;
    }    
}
console.log(divideArr([1, 2, 3, 4, 5], 2));


//Задание 6 *: Написать функцию, определяющую, является ли переданное в нее число степенью двойки.

function isExp(n) {
    var x = 0;
    for (var i = 0; i < n/2; i++) {
        x = x + 2;
    }
    if (x === n) {
        return true;
    } else {
        return false;
    }
};

console.log(isExp(128));