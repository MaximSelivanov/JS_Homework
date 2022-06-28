// Task 1
var enterNum = +prompt('Введите число'),
    add = +prompt('Сколько прибавить'),
    subtract = +prompt('Сколько отнять'),
    multiply = +prompt('На сколько умножить'),
    divide = +prompt('На сколько разделить'),
    result = (((enterNum + add) - subtract) * multiply) / divide;

alert('Формула: (' + enterNum + ' + ' + add + ' - ' + subtract + ') * ' 
                   + multiply + ' / ' + divide +'\nРезультат: ' + result);

//Task 2
var login = prompt('Введите логин');
var pass;

if (login === 'Админ') {
    pass = prompt('Введите пароль');
    if (pass === 'Чёрный Властелин') {
        alert('Добро пожаловать!');
    } else if (pass === null) {
        alert('Вход отменен');
    } else {
        alert('Пароль неверен');
    } 
} else if (login === null) {
    alert('Вход отменен');
} else {
    alert('Я вас не знаю');
};

//Task 3
var login = prompt('Введите логин'),
    message;

message = (login === 'Вася') ? alert('Привет') : (login === 'Директор') ? alert('Здравствуйте!') 
        : (login === '') ? alert('Нет логина') : alert('');

//Task 4
var userSurname,
    userName,
    userPatronymic,
    userAge,
    userGender,
    retireAge;

while (!(userSurname = prompt('Введите фамилию'))) {
    alert('Поле не должно быть пустым!');
};
while (!(userName = prompt('Введите имя'))) {
    alert('Поле не должно быть пустым!');
};
while (!(userPatronymic = prompt('Введите отчество'))) {
    alert('Поле не должно быть пустым!');
};
while (!(userAge = +prompt('Введите возраст')) || !(130 >= userAge > 0) || (userAge % 1 != 0)) {
    alert('Значение должно целым положительным числом не больше 130!');
};

if (userGender  = confirm('Ваш пол - мужской(OK) / Ваш пол - женский(Cancel)') == true) { 
    userGender = ' мужской';
} else {
    userGender = ' женский';
}

if (userGender == true && userAge < 60) {
    retireAge = ' нет';
} else { retireAge = ' да';
}

if (userGender != true && userAge < 50) {
    retireAge = ' нет';
} else { retireAge = ' да';
}

alert('Ваше ФИО: ' + userSurname + userName + userPatronymic + 
'\nВаш возраст в годах: ' + userAge + 
'\nВаш возраст в днях: ' + (userAge * 365) +
'\nЧерез 5 лет вам будет: ' + (userAge + 5) +
'\nВаш пол:' + userGender + '\nВы на пенсии:' + retireAge);



  










