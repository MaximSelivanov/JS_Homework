/*Задание 1:
Добавить на страницу два поля для ввода - X и Y и кнопку "Create".
Если хотя бы одно из полей пустое - кнопка дизэйблится (делать по keyup).
Поля должны принимать только целые числа от 1 до 10, в противном случае должно выводиться сообщение об ошибке
(делать по click).
По клику на кнопку должна отрисоваться шахматная доска с размерами X по горизонтали и Y по вертикали. Логика
разукрашивания ячеек не должна храниться в css (не использовать nth-child и т.д.).
При введении значений X и Y заново таблица должна корректно перерисоваться.
По клику на любое поле доски - цвета всех полей должны изменяться на противоположные.*/


var xAxisInput = document.getElementById('x'),
    yAxisInput = document.getElementById('y'),
    button = document.getElementById('button'),
    tableYline = document.createElement('tr'),
    tableXline = document.createElement('td'),
    body = document.getElementsByTagName('body')[0];
    button.setAttribute('disabled', '');

xAxisInput.addEventListener('keyup', function() {
    if (xAxisInput.value !== '' && yAxisInput.value !== '') {
        button.removeAttribute('disabled', '');
    }
});

yAxisInput.addEventListener('keyup', function() {
    if (xAxisInput.value !== '' && yAxisInput.value !== '') {
        button.removeAttribute('disabled', '');
    }
});


button.addEventListener('click', function() {
    var board = document.getElementsByTagName('table')[0];
		if (board) {
			board.remove();
		}
    var rows = +xAxisInput.value;
    var columns = +yAxisInput.value;
    if ( rows >= 1 && rows <=10 && columns >= 1 && columns <= 10) {
        var board = document.createElement('table');
        body.appendChild(board);
        for (var i = 0; i < columns; i++) {
            tableYline = document.createElement('tr');
            board.appendChild(tableYline);
            for (var j = 0; j < rows; j++) {
                tableXline = document.createElement('td');
                tableYline.appendChild(tableXline);
                if (i % 2 == 0 && j % 2 == 0 || i % 2 == 1 && j % 2 == 1) {
                    tableXline.classList.toggle('black');
                } else {
                    tableXline.classList.toggle('white');
                }
            }  
        } 
    } else {
        alert('Ведите в качестве значений X и Y целые числа от 1 до 10!');
    }
    xAxisInput.value = '';
    yAxisInput.value = '';
    button.setAttribute('disabled',''); 
});



document.addEventListener('click', function(evt){
    var target = evt.target;
    if (target.tagName == 'TD') {
        var squares = document.getElementsByTagName('td');
        for (var i = 0; i < squares.length; i++) {
            if (squares[i].classList.contains('white')) {
                squares[i].classList.remove('white');
                squares[i].classList.add('black');
            } else {
                squares[i].classList.remove('black');
                squares[i].classList.add('white');
            }
        }
    }
});



    
