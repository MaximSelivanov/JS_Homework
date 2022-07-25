/*Практическое задание (продолжение предыдущего задания):
    По клику на имеющуюся кнопку (получать ее по тегу) найти все дочерние ссылки у первого абзаца с помощью возможностей
    DOM-навигации и произвести соответствующие действия с ссылками (задание стилей лучше использовать через добавление
    css-класса). Установить событие клика на второй абзац (!!!) другим способом. Если пользователь нажимает на ссылки
    2-го абзаца, необходимо отменить им поведение по-умолчанию и вывести alert со значением атрибута href ссылки.
    
    Практическое задание (продолжение предыдущего задания):
  По кликам на ссылки второго абзаца проверять, если информации об этой ссылке нет в LS - записать ее туда. Ключом
  должен быть текст ссылки, а значением объект вида { path: (путь ссылки) }. После записи изменить значение атрибута
  href ссылки на "#" и выводить alert с уведомлением о том, что ссылка была сохранена.
  Если же информация об этой ссылке уже записана в LS, выводить в alert путь ссылки из объекта из хранилища.
  При загрузке страницы localStorage должен очищаться.*/

localStorage.clear();
var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
	var	firstParLinks = firstPar.children;
	for (var i = 0; i < firstParLinks.length; i++) {
		if (firstParLinks[i].tagName === 'A') {
			firstParLinks[i].classList.toggle('active');
		}
	}
});

secondPar.onclick = function(evt) {
	if (evt.target.tagName == 'A') {
		evt.preventDefault();
        if (localStorage.getItem(evt.target.innerText) == null) {
            localStorage.setItem(evt.target.innerText, JSON.stringify({path: evt.target.getAttribute('href')}));
            evt.target.setAttribute('href', '#');
            alert('Ссылка сохранена!');
        } else {
            alert(JSON.parse(localStorage.getItem(evt.target.innerText)).path);
        }
	}
};


