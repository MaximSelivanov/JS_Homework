//Задание 1: Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
function modifyArray (namesArr) {
    var arrObj = [];
    for (var i = 0; i < namesArr.length; i++) {
        var obj = {};
        obj.name = namesArr[i].toString();
        arrObj.push(obj);
    }
    return arrObj;
};

console.log(modifyArray(['Vasya', 'Petya', 'Ivan', 'Jack']));


/*Задание 2: 
Написать функцию, принимающую массив вида ['00', '13', '24'] и возвращающую строку "Текущее время : 00 : 13 : 24".
Для решения использовать перебирающий метод массивов (не метод join).*/

function showTime(array) {
    
    var currentTime = array.reduce(function(str, current){
        return str + ' : ' + current;
    }, 'Текущее время');

    return currentTime;
};

console.log(showTime(['00', '13', '24']));


/*Задание 3:
Написать функцию, которая будет возвращать количество гласных в переданном тексте. Регистр любой. 
Решение не должно быть "топорным".*/

function sumLetters (text) {
    var textArr = text.toLowerCase().split('');
    var vowel = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    filteredText = textArr.filter(function(i){
        return vowel.indexOf(i) >= 0;
    })
    return filteredText.length;
};

console.log(sumLetters('абвгдеёжзийклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));


/*Задание 4:
Написать функцию, которая будет принимать текст в качестве параметра. У текста должны быть пробелы, точки, запятые,
восклицательные и вопросительные знаки. Текст необходимо разбить на предложения (по точкам, восклицательным и
вопросительным знакам - убрав их).
Для каждого из предложений - отдельно вывести текст предложения и рядом количество букв в нем (без учета пробелов,
запятых и т.д. - именно букв). Из ранее непройденных методов разрешается использовать только (!!!) регулярное выражение
в методе split.
Функция должна работать следущим образом (потестировать на данном тексте):
countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
Привет, студент: Letters quantity is: 13
Студент: Letters quantity is: 7
Как дела, студент: Letters quantity is: 14*/

function countSentencesLetters(sentenses) {
    var sentensesArr = sentenses.split(/[\.!\?]+/);

    var sentensesLength = sentensesArr.map(function(sentence) {
        if (sentence.length > 0) {
            console.log(sentence.trim() + ': Letters quantity is: ' + sentence.trim().split(/[,\s]/).join('').length);  
        }
    });
    return sentensesLength;
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');


/*Задание 5 *:
Написать функцию, которая будет находить в переданном ей тексте первое наиболее часто повторяемое слово и возвращать
информацию вида:
"Максимальное число повторений у слова "привет" - 8"
Для удобного разделения текста на слова сразу по нескольким знакам препинания - разрешается использовать регулярное
выражение в методе split.*/

function countOftenWords(text) {
    var wordsArr = text.toLowerCase().split(/[\.!\?,\s]+/);
    var countObj = {};

    for (var i = 0; i < wordsArr.length; i++) {
        var objKey = wordsArr[i];
        if (countObj[objKey] == undefined) {     
            countObj[objKey] = 1;
        } else {
            countObj[objKey]++;          
        }
    }
    for (var key in countObj) {
        console.log('Максимальное число повторений у слова ' + '\"' + key + '\"' + ' - ' + countObj[key]); break;
    }
}

countOftenWords('Привет, студент, привет! Студент... Привет, как дела, студент?');
