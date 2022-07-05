/*Практическое задание 4:
Создать класс Animal. Перенести в него все свойства и методы. Отнаследоваться внутри Cat от Animal.
Расширить метод feed для кошек. Теперь он должен выводить в консоль информацию вида:
  "Насыпаем в миску (количество гр.) корма.
  Кот доволен ^_^"
Использовать вызов родительского метода вида animalFeed() и сохранение контекста this через переменную.
Все вызовы, которые работали ранее, должны по-прежнему работать корректно.
Практическое задание 5:
Добавить публичный метод stroke, который будет выводить в консоль информацию "Гладим кота.".
Доделать метод feed таким образом, чтобы можно было цепочкой вызывать его и метод stroke в любой
последовательности и сколько угодно раз.
(Лишние логи можно убрать, делать всё в том же задании).
*/

function Animal(name) {
    
    var foodAmount = 50;
    var self = this;
   
    function formatFoodAmount() {
        return foodAmount + ' гр.';
    }

    this.dailyNorm = function(amount) {
        if (!arguments.length) return formatFoodAmount();

        if (amount < 30 || amount > 100) {
            return 'Недопустимое количество корма.';
        }

        foodAmount = amount;
    };

    this.name = name;

    self.feed = function() {
        console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
}

function Cat() {
    Animal.apply(this, arguments);

    var animalFeed = this.feed;
    this.feed = function() {
        animalFeed.call(this);
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


