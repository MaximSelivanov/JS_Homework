/*Задание 3:
Написать функцию, которая будет определять, является ли переданное в нее слово палиндромом (напр. шалаш).
Регистр в словах учитываться не должен. Тестировать функцию можно только на одиночных словах (без фраз).
Функция должна работать следущим образом:
isPalindrome('шалаШ'); // true
isPalindrome('привет'); // false*/

function isPalindrome(word) {
    var initialWord = word.toLowerCase();
    var reverseWord = word.toLowerCase().split('').reverse().join('');
    
    return initialWord == reverseWord;
};

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
    return newWordOne === newWordTwo;
};

console.log(areAnagrams('кот', 'Отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));
