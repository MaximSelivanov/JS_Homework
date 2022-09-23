/*! Все задания пишем в одном файле, ограничивая область видимости конкретного решения.
! Для того, чтобы WebStorm поддерживал синтаксис ES6 - File -> Settings -> в поиске пишем JavaScript ->
  Languages & Frameworks -> JavaScript -> Выбираем версию ES6 -> Apply*/

/*Задание 1:
Имеется следующий объект - {a: 1, b: 2, c: 3, d: 4}. Необходимо сделать так, чтобы в переменные a и b записались
соответствующие значения, а все, что осталось - в объект obj.*/
{
  let {a: a, b: b, ...obj} = {a: 1, b: 2, c: 3, d: 4}

  console.log(a);
  console.log(b);
  console.log(obj);
}

/*Задание 2:
Запросить у пользователя имя и сохранить его в переменную.
Создать объект со свойством name, куда записать короткой записью значение имени пользователя, и методом sayHi,
который будет возвращать строку вида:
"Hi, (имя пользователя)!"
Имя пользователя получать уже из объекта.
Проверить работу метода. Убедиться в уместном использовании способов задания переменной.*/
{
  let name = promt('Enter name');

  const obj = {
    name,
      sayHi: function() {
		  return `Hi, ${this.name}`;
	  }
  };

  console.log(obj.sayHi())
}

/*Задание 3:
Написать функцию, которая будет принимать параметры x, y, z.
При вызове функции передать в неё первым параметром объект вида {a: 2, b: 3}, вторым параметром целое число.
X и y получаем из свойств переданного в функцию объекта a и b. У z значение по-умолчанию должно быть 1.
Функция должна возвращать результат возведения в степень y числа x, умноженный на z.
Валидацию опустить.*/
{
  function exp(x, y, z = 1) {
    let {a, b} = {a: 2, b: 3};
    x = a;
    y = b;
    return (x ** y) * z;
  }
  console.log(exp({a: 2, b: 3}, 2));
}

/*Задание 4:
Создать массив с именем и возрастом. Передать его в функцию. Функция должна принять его как два отдельных параметра
name и age и вернуть строку вида:
"Hello, I'm (имя) and I'm (возраст) years old."
Не использовать деструктуризацию.*/
{
  const personArr = ['Max', 39];
  function hello(name, age) {
    return `"Hello, I'm ${name} and I'm ${age} years old."`
  }

  console.log(hello(...personArr));
}

/*Задание 5:
Написать функцию, принимающую массив чисел. При вызове числа передаются в функцию отдельными параметрами, не массивом.
Вывести в консоль числа последовательно.*/
{
  function showNum(...arr) {
    for (let i of arr) {
      console.log(i);
    }
  }

  console.log(showNum(1, 2, 3, 4));
}

/*Задание 6:
Переписать решение задачи с поиском гласных на новый синтаксис. Использовать перебирающий метод массива и поиск
элемента в массиве.
function countVowelLetters(text) {
    text = text.toLowerCase().split('');

    var vowelLetters = ['а', 'я', 'ы', 'и', 'о', 'ё', 'у', 'ю', 'э', 'е', 'a', 'e', 'i', 'o', 'u', 'y'],
        counter = 0;

    for (var i = 0; i < vowelLetters.length; i++) {
        for (var j = 0; j < text.length; j++) {
            vowelLetters[i] === text[j] && counter++;
        }
    }

    return counter;
}
countVowelLetters('Шла Саша по шоссе И сосала сУшку'); // 12*/
{
  function countVowelLetters (text) {
    let textArr = text.toLowerCase().split('');
    console.log(textArr);
    const vowel = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'ё', 'е', 'a', 'e', 'i', 'o', 'u', 'y'];
    filteredText = textArr.filter(function(i){
      return vowel.includes(i);
    })
    return filteredText.length;
};

  console.log(countVowelLetters('Шла Саша по шоссе И сосала сУшку'));
}

/*Задание 7:
    Написать функцию, принимающую массив объектов вида:
      [
          {name: 'Vasya Pupkin', age: 25},
          {name: 'Ivan Petrov', age: 30},
          {name: 'Fedor Ivanov', age: 42}
      ]
    и возвращающую объект вида:
      {
          Пользователи младше 40: [
              {name: 'Vasya Pupkin', age: 25},
              {name: 'Ivan Petrov', age: 30}
          ],
          Пользователь с именем Федор: {name: 'Fedor Ivanov', age: 42}
      }
    Для свойства "Пользователь с именем Федор" осуществлять поиск объекта по имени, которое начинается с подстроки Fedor.*/
{
  const personsArr =  [
    {name: 'Vasya Pupkin', age: 25},
    {name: 'Ivan Petrov', age: 30},
    {name: 'Fedor Ivanov', age: 42}
  ]

  function filterArr(arr) {
    let underForty = arr.filter(item => item.age < 40);
    let personFedor = arr.find(item => item.name.startsWith('Fedor'));
    let personObj = {
      'Пользователи младше 40': underForty,
      'Пользователь с именем Федор': personFedor
    };
    return personObj;
  }

  console.log(filterArr(personsArr));
}
    
/*Задание 8:
Написать функцию, принимающую массив имен пользователей и возвращающую массив объектов вида:
[
  {Пользователь 1: 'Вася'},
  {Пользователь 2: 'Петя'}
]*/

{
  function createObjArr(arr) {
    let usersObjArr = arr.map((item, index) => ({[`Пользователь ${(index + 1)}`]: item,}));
    return usersObjArr;
  }

  console.log(createObjArr(['Максим', 'Павел', 'Александр']))
}

/*Задание 9:
Написать функцию, принимающую массив объектов и объединяющую их в один новый объект. Например:
  [
    {name: 'Vasya'},
    {name: 'Piotr', age: 25},
    {salary: '2000$'}
  ]
необходимо преобразовать в
  {
    name: 'Piotr',
    age: 25,
    salary: '2000$'
  }
Spread-оператор не использовать. Использовать перебирающий метод массивов. Старые объекты не должны преобразовываться.*/
{
  const objArray = [
    {name: 'Vasya'},
    {name: 'Piotr', age: 25},
    {salary: '2000$'}
  ];

  function makeObj(arr) {
    let personObj = arr.reduce((acc, item) => Object.assign(acc, item));
    return personObj;

  }

  console.log(makeObj(objArray));
}

/* Задание 10:
Переписать последнее задание с ООП на новый синтаксис. Проверить работоспособность всех методов.*/
{
  class Animal {
    constructor(name, amount) {
        this._foodAmount = 50;
        this.name = name;
    }

    _formatFoodAmount() {
        return `${this._foodAmount} гр.`;
    };
    
    dailyNorm(amount) {
        if (!arguments.length) return this._formatFoodAmount();
        if (amount < 30 || amount > 100) {
        return 'Недопустимое количество корма.';
        }
        this._foodAmount = amount;
    };
    
    feed() {
        console.log(`Насыпаем в миску ${this.dailyNorm()} корма.`);
    };
}

class Cat extends Animal {
    constructor (name){
        super(name);
        this.stroke;
    }
    feed() {
        super.feed();
        console.log('Кот доволен ^_^.');
        return this;
    }
    stroke() {
        console.log('Гладим кота');
        return this;
    }
}

let barsik = new Cat('Барсик');
console.log(barsik.name);
barsik.feed().stroke();
}

/* Задание 11:
Написать функцию-промис, которая принимает в себя 2 целых числа и выводит в консоль числа, входящие в диапазон,
каждую секунду. После окончания работы интервала в консоль должно вывестись последнее запомненное число.
Если в функцию первым параметром было передано бОльшее число - значения параметров следует поменять местами.
В случае, если в функцию были переданы не целые числа - промис должен быть завершен неуспешно.*/

{
  function createPromis(numOne, numTwo) {
    return new Promise((resolve, reject) => {
      console.log('Промис запущен');
      if (numOne > numTwo) {
        [numOne, numTwo] = [numTwo, numOne];
      }
      if (Number.isInteger(numOne) && Number.isInteger(numTwo)) {
        setInterval(() => {
          if (numOne < numTwo) {
            console.log(numOne++);
          } else {
            resolve(numOne);
          }
        }, 1000)
      } else {
        reject ('Введите целое число!')
      };
    });
  }

 createPromis(10, 3)
 .then(result => console.log(`Результат промиса: ${result}`))
 .catch(error => console.log(`Возникла ошибка в промисе: ${error}`))
 .finally(() => console.log('Работа промиса завершена'));
}