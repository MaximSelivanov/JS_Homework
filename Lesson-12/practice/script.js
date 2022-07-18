/*Практическое задание (продолжение предыдущего задания):
    По клику на имеющуюся кнопку (получать ее по тегу) найти все дочерние ссылки у первого абзаца с помощью возможностей
    DOM-навигации и произвести соответствующие действия с ссылками (задание стилей лучше использовать через добавление
    css-класса). Установить событие клика на второй абзац (!!!) другим способом. Если пользователь нажимает на ссылки
    2-го абзаца, необходимо отменить им поведение по-умолчанию и вывести alert со значением атрибута href ссылки.*/


var container = document.getElementById('container');

var firstPar = document.createElement('p'),
    secondPar = document.createElement('p');

firstPar.innerHTML = 'Hello, here are <a href="https://www.facebook.com">Link 1</a> and <a href="https://twitter.com">Link 2</a>';
secondPar.innerHTML = 'Hello, here are <a href="http://google.by">Link 3</a> and <a href="https://vk.com">Link 4</a>';

container.appendChild(firstPar);
container.appendChild(secondPar);

var button = document.getElementsByTagName('button')[0];
var firstLink = firstPar.getElementsByTagName('a')[0];
var secondLink = firstPar.getElementsByTagName('a')[1];
button.addEventListener('click', function() {
    firstLink.classList.toggle('active');
    secondLink.classList.toggle('active');
});

secondPar.onclick = function(evt) {
	if (evt.target.tagName == 'A') {
		evt.preventDefault();
		alert(evt.target.getAttribute('href'));
	}
};


