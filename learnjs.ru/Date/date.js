//Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут.
let fisrsDate = new Date(2012, 01, 20, 03, 12);
document.write(`<h1> ${fisrsDate} <h1><br>`);

//Создайте функцию getWeekDay(date), которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.
let weekday;
const secondDate = new Date();
function getWeekDay(date) {
    return weekday = date.toLocaleString('ru', {weekday: 'short'});
} 
getWeekDay(secondDate);
document.write(`<h1> ${weekday} <h1><br>`);