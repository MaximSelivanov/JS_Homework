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
