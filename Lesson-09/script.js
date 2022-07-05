
/*Задание 1:
Переписать предыдущий пример с кошками на прототипный стиль ООП.*/
function Animal(name) {
    this._foodAmount = 50;
    this.name = name;
}

Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
};

Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 30 || amount > 100) {
    return 'Недопустимое количество корма.';
    }
    this._foodAmount = amount;
};

Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};

function Cat() {
    Animal.apply(this, arguments);
};

Cat.prototype = Object.create(Animal.prototype);

Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^.');
    return this;
}

Cat.prototype.stroke = function() {
    console.log('Гладим кота');
    return this;
}

var barsik = new Cat('Барсик');
console.log(barsik.name);
barsik.feed().stroke();


/* Задание 2:
    Написать функцию, возвращающую глубокую копию объекта - его клон. Клонироваться должны значения всех типов данных
    (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Метод isArray использовать можно.
*/

function deepClone(initialObj) {
    
    var clonedObj = {};

    for (var key in initialObj) {
        if (typeof initialObj[key] === 'object' && initialObj[key] !== null && !Array.isArray(initialObj[key])) {
            clonedObj[key] = deepClone(initialObj[key]);
        } else if (Array.isArray(initialObj[key])) {
            
            clonedObj[key] = [];

            for (var i = 0; i < initialObj[key].length; i++) {
                if (typeof initialObj[key][i] === 'object' && initialObj[key][i] !== null) {
                    clonedObj[key][i] = deepClone(initialObj[key][i]);
                } else {
                    clonedObj[key][i] = initialObj[key][i];
                }
            }   
        } else { 
            clonedObj[key] = initialObj[key];
        }
    }
    return clonedObj;
};

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

  /*Задание 3:
    Написать функцию глубокого сравнения объектов, возвращающую boolean. Сравниваться должны значения всех типов данных
    (+ массивы и функции; NaN не учитывать), а также любого уровня вложенности. Для определения длины объектов
    разрешается использовать метод Object.keys(). Хорошо протестировать работу функции (можно на объекте из пред. задания).*/

function deepCompare(initialObj, comparingObj) {

    if (Object.keys(initialObj).length === Object.keys(comparingObj).length) {
    
        for (var key in initialObj) {
    
            if (typeof initialObj[key] === 'object' && initialObj[key] !== null && !Array.isArray(initialObj[key])) {
                if (!deepCompare(initialObj[key], comparingObj[key])) {
                    return false;
                }
            } else if (Array.isArray(initialObj[key])) {
                for (var i = 0; i < initialObj[key].length; i++) {
                    if (typeof initialObj[key][i] === 'object' || initialObj[key][i] !== null) {
                        if (!deepCompare(initialObj[key][i], comparingObj[key][i])) {
                            return false;
                        }
                    } else {
                        if (initialObj[key][i] !== comparingObj[key][i]){
                            return false;
                        }
                    }     
                }
            } else if (typeof initialObj[key] === 'function') {
                if (initialObj[key] + '' !== comparingObj[key] + '') {
                    return false;
                }
            } else if (initialObj[key] !== comparingObj[key]) {
                return false;
            }
        } 
        return true;
    } else {
        return false;
    } 
}
    
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
    
    var comparingObj = {
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
    
    console.log(deepCompare(initialObj, comparingObj));

