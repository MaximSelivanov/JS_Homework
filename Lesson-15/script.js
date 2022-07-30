/* Задание 1:
    Добавить на страницу кнопку "Загрузить список пользователей".
    По клику на нее осуществляется AJAX (GET) запрос на https://reqres.in (List Users).
    В случае успешного получения данных:
      - ДИНАМИЧЕСКИ добавить на страницу вкладки "Пользователь 1", "Пользователь 2" и т.д.
      (в соотв. с количеством пользователей)
      - сделать первую вкладку активной и показать под ней блок с информацией о пользователе
      - вкладки должны иметь возможность переключаться и отображать соответствующие данные
      - полученные данные должны записываться в LocalStorage *
      - по клику на кнопку должна происходить проверка, если данные есть в LocalStorage, не отправлять AJAX запрос, а
        сразу отрисовывать их *
    В случае ошибки получения данных (протестировать можно, изменив url запроса как в примере с урока):
      - отрисовать на странице сообщение о том, что данные не получены, в произвольном виде
    Перед отправкой ОБЯЗАТЕЛЬНО (!!!) порефакторить код и протестировать ваше приложение на работоспособность и
    максимально на отсутствие багов.*/


var button = document.getElementById('get-button');


button.addEventListener('click', function() {
    button.setAttribute('disabled', '');

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://reqres.in/api/users?page=2', true );

    xhr.send();
    
    xhr.onload = function() {
        var statusType = Math.round(this.status / 100);
        if (statusType === 2) {
            var response = JSON.parse(this.response);
            var users = response.data;
            var tabsNav = document.getElementsByClassName('tabs-nav')[0];
            var userInfo = document.getElementsByClassName('tabs-content')[0];
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                tabsNav.innerHTML += '<div class="tab-btn">User ' + user.id + '</div>';
                tabsNav.firstElementChild.classList.add('active');

                userInfo.innerHTML += '<div class="tabs-info hidden"><div class="user-photo"><img src="' + user.avatar + '" alt="' + user.id + '" /></div>' +
                '<div class="user-name"><p>First Name: ' + user.first_name + '</p>' + '<p>Last Name: ' + user.last_name + '</p></div></div>';
                userInfo.firstElementChild.classList.remove('hidden');
            };
           
            tabsNav.addEventListener('click', function(evt) {
                var target = evt.target;
                var userButtons = document.getElementsByClassName('tab-btn');
                var userCards = document.getElementsByClassName('tabs-info');
                for (var i = 0; i < userButtons.length; i++) {
                    var userButton = userButtons[i];
                    if (userButton === target) {
                        userButton.classList.add('active');
                        var current = i;
                        for (var j = 0; j < userCards.length; j++) {
                            var userCard = userCards[j];
                            if (j === current) {
                                userCard.classList.remove('hidden');
                            } else {
                                userCard.classList.add('hidden');
                            }
                        }
                    } else  {
                        userButton.classList.remove('active');
                    }
                }
            }); 
        }  
    };

    xhr.onerror = function() {
        var container = document.getElementsByClassName('container')[0];
        var error = document.createElement('div');
        error.classList.add('error');
        error.innerHTML = 'ERROR!';
        container.appendChild(error);
    };

    xhr.onloadend = function() {
        console.log('Запрос завершен');
    }
});