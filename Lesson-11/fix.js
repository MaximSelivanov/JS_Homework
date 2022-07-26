//Задание 1: Написать функцию, принимающую массив имен и возвращающую массив объектов вида {name: 'Vasya'}.
function modifyArray (namesArr) {
    var arrObj = namesArr.map(function(name) { 
        return {name: name};
    });
    return arrObj;
};

console.log(modifyArray(['Vasya', 'Petya', 'Ivan', 'Jack']));


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

    sentensesArr.map(function(sentence) {
        if (sentence.length > 0) {
            console.log(sentence.trim() + ': Letters quantity is: ' + sentence.trim().split(/[,\s]/).join('').length);  
        }
    });
}

countSentencesLetters('Привет, студент! Студент... Как дела, студент?');
