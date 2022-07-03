/*ДОМАШНЕЕ ЗАДАНИЕ 8
  Задание 1:
    Переписать предыдущий пример с кошками на прототипный стиль ООП.

  Задание 2:
    Написать функцию, возвращающую глубокую копию объекта - его клон. Клонироваться должны значения всех типов данных
    (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Метод isArray использовать можно.

    Протестировать работу функции можно на таком примере:
      var initialObj = {
          string: 'Vasya',
          number: 30,
          boolean: true,
          undefined: undefined,
          null: null,
          array: [1, 2, 3],
          object: {
              string2: 'Petrov',
              object2: {
                  array2: [{}, {}]
              },
              object3: {}
          },
          method: function() {
              alert('Hello');
          }
      };

      var clonedObj = deepClone(initialObj);

      clonedObj.object.object2.array2[1].name = 'Vasya';
      clonedObj.array.push(2);

      console.log(initialObj);
      console.log(clonedObj);

  Задание 3:
    Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
    (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Для определения длины объектов
    разрешается использовать метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания).*/


//Task 1

function Animal(name) {  
    this._foodAmount = 50;
    this._name = name;
}

Animal.prototype._formatFoodAmount = function() {
    return foodAmount + ' гр.';
    }

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 30 || amount > 100) {
        return 'Недопустимое количество корма.';
    }

    foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + dailyNorm() + ' корма.');
};

var cat = new Animal
function Cat() {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed();
        console.log('Кот доволен ^_^.');
        return this;
    }

    this.stroke = function() {
        console.log('Гладим кота');
        return this;
    }      
}

var barsik = new Cat('Барсик');
console.log(barsik.name);
barsik.feed().stroke();