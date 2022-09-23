/*ДОМАШНЕЕ ЗАДАНИЕ 15
Задание 1:
Написать свой секундомер в формате mm:ss:msms (по 2 цифры в каждом параметре).
Изначально на странице должна быть кнопка "Start". При запуске секундомера текст кнопки меняется на "Stop".
Если пользователь нажимает на кнопку "Stop" - ее текст должен измениться на "Run".
Использовать data-атрибут, хранящий состояние секундомера. Работа кнопки и секундомера должна опираться на него.
Также после старта работы секундомера должны появиться кнопки "Save" и "Reset".
Кнопки должны работать соответственным образом (по клику на кнопку "Reset" секундомер должен полностью вернуться
в изначальное состояние).
Максимальное количество минут - 60. После этого секундомер останавливается (тестировать на значениях поменьше).
Из остальной логики должны остаться только кнопка "Reset" и метки.
* Секундомер должен работать после перезагрузки страницы и полностью сохранять свое состояние и метки.
Чтобы время шло со скоростью реального - запускать интервал с промежутком в 10 ms, увеличивать значение ms на 1
на каждой итерации и считать их до 100.
При реализации класс Date использовать запрещено.*/

let startButton = document.getElementById('main-btn'),
    stopwatch = document.getElementsByClassName('stopwatch')[0],
    minutesCell = document.getElementsByClassName('minutes')[0],
    secondsCell = document.getElementsByClassName('seconds')[0],
    millisecondsCell = document.getElementsByClassName('milliseconds')[0],
    addBtns = document.getElementsByClassName('add-buttons')[0],
    addStops = document.getElementsByClassName('stops')[0];

let [min, sec, msec] = [0, 0, 0];
let timerId = null;
let stopNum = 1;

startButton.addEventListener('click', startStopwatch);

function startStopwatch() {
    if (stopwatch.dataset.state === 'initial' || stopwatch.dataset.state === 'stop') {
        startButton.innerHTML = 'Stop';
        stopwatch.dataset.state = 'run';
        timerId = setInterval(() => {
            msec++;     
            if (msec === 100) {
                msec = 0;
                sec++;
                if (sec === 60) {
                    sec = 0;
                    min++  
                    if (min === 60) {
                        startButton.remove();
                        clearInterval(timerId);
                        removeSaveBtn();
                        stopwatch.dataset.state = 'stop';
                    }
                    minutesCell.innerHTML = `0${min}`.slice(-2);
                }
                secondsCell.innerHTML = `0${sec}`.slice(-2);
            }
            millisecondsCell.innerHTML = `0${msec}`.slice(-2);
        }, 10)
        addButtons();
    } else if (stopwatch.dataset.state = 'run') {
        startButton.innerHTML = 'Run';
        clearInterval(timerId);
        stopwatch.dataset.state = 'stop';
    }   
}

function addButtons() {
    addBtns.innerHTML = '<button class="button" id="reset-btn">Reset</button><button class="button" id="save-btn">Save</button>'; 
    
    let resetButton = document.getElementById('reset-btn');
    let saveButton = document.getElementById('save-btn');
    
    resetButton.addEventListener('click', resetStopwatch);
    saveButton.addEventListener('click', saveStops);
}

function removeSaveBtn() {
    addBtns.children[0].remove();
}

function saveStops() {
    addStops.innerHTML += `<div class="stop-mark">${stopNum++}. ${`0${min}`.slice(-2)}:${`0${sec}`.slice(-2)}:${`0${msec}`.slice(-2)}</div>`;
}

function resetStopwatch() {
    clearInterval(timerId);
    stopwatch.dataset.state = 'initial';
    addBtns.innerHTML = '';
    addStops.innerHTML = '';
    for (let i = 0; i < stopwatch.children.length; i++) {
        stopwatch.children[i].innerHTML = '00';
    }
    startButton.innerHTML = 'Start';
    [min, sec, msec] = [0, 0, 0];
    stopNum = 1;
}

