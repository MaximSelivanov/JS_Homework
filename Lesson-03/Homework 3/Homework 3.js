// Задание 1
var styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Регги');

// Задание 2
// Вариант 1
for (var i = 2; i <= 10; i += 2) {
    console.log(i);
}

// Вариант 2
for (var i = 2; i <= 10; i++) {
    console.log(i++);
}

// Вариант 3
for (var i = 2; i <= 10; i++) {
    if (!(i % 2)) {
        console.log(i);
    }
}

// Вариант 4
for (var i = 2; i <= 10; i++) {
    if (i % 2) continue;

    console.log(i);
}

// Задание 3
var sum = 0,
    arr = [];

while (true) {
    var number = prompt('Введите число');

    if (number === '' || number === null || number != +number) break;

    arr.push(+number);
}

for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);

// Задание 4 *
var endValue = 10;

parent:
    for (var i = 2; i <= endValue; i++) {
        for (var j = 2; j < i; j++) {
            if (!(i % j)) continue parent;
        }

        alert(i);
    }