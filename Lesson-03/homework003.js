//Task 1
var styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-Ролл');
styles[styles.length - 2] = 'Классика';
alert(styles.shift());
styles.unshift('Рэп', 'Рэгги');

//Task 2.1
for (var i = 2; i <= 10; i++) {
    if(!(i % 2 == 0)) continue;
    alert(i);
};

//Task 2.2
for (var i = 2; i <= 10; i++) {
    if (i % 2 == 0){
        alert(i);
    }
};

//Task 2.3
for (var i = 2; i <= 10; i+=2) {
    alert(i);
};

//Task 3
var array = [];
var num;
var sum = 0;
while ((num = prompt('Введите число'))) {
    if (num === '' || num === null || isNaN(num)) break;
    array.push(+num);
    };

for (var i = 0; i < array.length; i++) {
    sum += array[i];
}
alert(sum);

//Task 4
var start = +prompt('Задайте начало интервала (положительное целое число).')
var end = +prompt('Задайте конец интервала (положительное целое число).')
outer: for(var i = start; i <= end; i++) {
    for (var j = 2; j < i; j++){
        if (i % j == 0) continue outer;
    }
    alert(i);
};