/*Задание 1:
    Сверстать таблицу из 3х столбцов, в последней строке которой все ячейки объеденены в одну с текстом
    "Добавить".
    По клику на эту ячейку-кнопку в начало таблицы должна добавляться новая строка.
    По клику на ячейку таблицы, в ней должен появиться сфокусированный (!!!) текстовый инпут.
    При потере фокуса инпутом - он должен исчезнуть, на его месте остается лишь ранее введенный в него текст.
    При клике на ячейку, уже содержащую текст - вставляется инпут с этим же текстом (т.е. можно отредактировать текст).
    В одно время в таблице может находиться только один инпут.
    При реализации использовать делегирование событий.

    Добавить событие по нажатию на Enter в случае, если на странице есть активный инпут. Событие должно работать точно
    так же, как и потеря фокуса, то есть прятать инпут и оставлять в ячейке текст. */

    var button = document.getElementsByClassName('table-button')[0];
    var table = document.getElementsByTagName('tbody')[0];
    
    

    button.addEventListener('click', function() {
        var firstRow = table.getElementsByTagName('tr')[0];
        var newRow = document.createElement('tr'),
            cellOne = document.createElement('td'),
            cellTwo = document.createElement('td'),
            cellThree = document.createElement('td');
        newRow.appendChild(cellOne);
        newRow.appendChild(cellTwo);
        newRow.appendChild(cellThree);
        table.insertBefore(newRow, firstRow);
    });

    var input = document.createElement('input');

    table.addEventListener('click', function(evt) {
        var target = evt.target;
        if (target.tagName === 'TD' && target.className !== 'table-button') {
            target.appendChild(input);
            input.focus();
        } 
        input.addEventListener('focus', function() {
            var cell = input.parentElement;
            if (cell.textContent.length != 0) {
            input.value = cell.textContent;}
        });
    });

    input.addEventListener('blur', function(){
        var cell = input.parentElement;
        cell.innerHTML = input.value;
        input.value = '';
    });


