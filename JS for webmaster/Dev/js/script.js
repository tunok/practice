//Получить кнопку "Открыть магазин" через id
const buttonOpen = document.getElementById('open-btn');

//Получить все поля в левом меню через классы
const marketName = document.getElementsByClassName('name')[0];
const marketNameVal = document.getElementsByClassName('name-value')[0];
const marketBudget = document.getElementsByClassName('budget')[0];
const marketBudgetVal = document.getElementsByClassName('budget-value')[0];
const marketGods = document.getElementsByClassName('goods')[0];
const marketGodsVal = document.getElementsByClassName('goods-value')[0];
const marketItems = document.getElementsByClassName('items')[0];
const marketItemsVal = document.getElementsByClassName('items-value')[0];
const marketEmployers = document.getElementsByClassName('employers')[0];
const marketEmployersVal = document.getElementsByClassName('employers-value')[0];
const marketDiscount = document.getElementsByClassName('discount')[0];
const marketDiscountVal = document.getElementsByClassName('discount-value')[0];
const marketIsopen = document.getElementsByClassName('isopen')[0];
const marketIsopenVal = document.getElementsByClassName('isopen-value')[0];

//Получить поля категории товаров через класс
const googsItem1 = document.getElementsByClassName('goods-item')[0];
const googsItem2 = document.getElementsByClassName('goods-item')[1];
const googsItem3 = document.getElementsByClassName('goods-item')[2];
const googsItem4 = document.getElementsByClassName('goods-item')[3];

//Получить все 3 кнопки через Tag
const buttonGodsItem = document.getElementsByTagName('button')[1];
const buttonCountBudget = document.getElementsByTagName('button')[2];
const buttonHireEmployers = document.getElementsByTagName('button')[3];

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
const inputChooseItem = document.querySelector('input.choose-item');
const inputTimeValue = document.querySelector('input.time-value');
const inputCountBudgetValue = document.querySelector('input.count-budget-value');

//Получить поля имен сотрудников через querySelectorAll
const employerName1 = document.querySelectorAll('input.hire-employers-item')[0];
const employerName2 = document.querySelectorAll('input.hire-employers-item')[1];
const employerName3 = document.querySelectorAll('input.hire-employers-item')[2];


//создать 2 переменные, которые будут получать данные от пользователя
let money,    //переменные для функций
    shopName,
    answer,
    shopGods
function userQuestion() {  // получает данные от пользователя
    money = parseInt(prompt('Ваш бюджет?', ''));
    while (!money) {     //проверка на ввод
        alert('Введите число!')
        money = parseInt(prompt('Ваш бюджет?', ''));
    }
    shopName = prompt('Название вашего магазина?', 'TopShop');
};
let mainList = {
    money: money,
    shopName: shopName,
    shopGods: [],
    employers: {},
    open: open,
    discount: false,     //объект с пользовательским вводом
};
function choseGods() {
    for (let i = 0; i < 3; i += 1) {
        answer = prompt('Какой тип товаров будем продавать?', '');
        console.log(answer);
        while (!answer) {
            console.log(answer);
            answer = prompt('Какой тип товаров будем продавать?', '');
        }
        mainList.shopGods[i] = answer;
    }    //Задать пользователю 3 раза вопрос "Какой тип товаров будем продавать?"
};
choseGods()
console.log('array shopGods: ', mainList.shopGods);
console.log('Object : ', mainList);
function calcDayBudget() {      //Оформить расчет дневного бюджета как функцию
    return money/30;
};
//let price = 200;
function getDiscount(discount) {
    if ( discount ) {
        const discountPrice = price * 0.8;
        return discountPrice;
    }    //Создать функцию дисконтной системы
};
function employers() {   //4 раза спросить у пользователя имя сотрудника и записать в объект employers в формате Номер - Имя
    for (let i = 1; i < 5; i += 1) {
        mainList.employers[i] = prompt('Имя сотрудника?', 'Иван')
    }
};
function shopIncluded() {    // Используя цикл for in для объекта вывести в консоль сообщение "Наш магазин включает в себя :"
    for (let inc in mainList.shopGods) {
        document.write('<h1>')
        document.write('Наш магазин включает в себя :' + mainList.shopGods[inc])
        document.write('</h1>')
    }
};

