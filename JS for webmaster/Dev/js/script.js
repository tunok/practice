//Получить кнопку "Открыть магазин" через id
let buttonOpen = document.getElementById('open-btn');

//Получить все поля в левом меню через классы
let marketName = document.getElementsByClassName('name')[0],
    marketNameVal = document.getElementsByClassName('name-value')[0],
    marketBudget = document.getElementsByClassName('budget')[0],
    marketBudgetVal = document.getElementsByClassName('budget-value')[0],
    marketGods = document.getElementsByClassName('goods')[0],
    marketGodsVal = document.getElementsByClassName('goods-value')[0],
    marketItems = document.getElementsByClassName('items')[0],
    marketItemsVal = document.getElementsByClassName('items-value')[0],
    marketEmployers = document.getElementsByClassName('employers')[0],
    marketEmployersVal = document.getElementsByClassName('employers-value')[0],
    marketDiscount = document.getElementsByClassName('discount')[0],
    marketDiscountVal = document.getElementsByClassName('discount-value')[0],
    marketIsopen = document.getElementsByClassName('isopen')[0],
    marketIsopenVal = document.getElementsByClassName('isopen-value')[0];

//Получить поля категории товаров через класс
let googsItem = document.getElementsByClassName('goods-item'),
    googsItem1 = googsItem[0],
    googsItem2 = googsItem[1],
    googsItem3 = googsItem[2],
    googsItem4 = googsItem[3];

//Получить все 3 кнопки через Tag
let buttons = document.getElementsByTagName('button'),
    buttonGodsItem = buttons[1],
    buttonCountBudget = buttons[2],
    buttonHireEmployers = buttons[3];

//Получить поля ввода товаров, времени и расчета бюджета через querySelector
let inputChooseItem = document.querySelector('input.choose-item'),
    inputTimeValue = document.querySelector('input.time-value'),
    inputCountBudgetValue = document.querySelector('input.count-budget-value');

//Получить поля имен сотрудников через querySelectorAll
let employerNames = document.querySelectorAll('input.hire-employers-item'),
    employerName1 = employerNames[0],
    employerName2 = employerNames[1],
    employerName3 = employerNames[2];
	
//переменные для функций
let money,    
    shopName,
    answer,
    shopGods,
    discountPrice;

//объект для хранения
let mainList = {
    money: money,
    shopName: shopName,
    shopGods: [],
    employers: {},
    open: false,
    discount: false,
};

// получить данные от пользователя при нажатии на кнопку "открыть магазин"
function getUserAnswer() {  
    do {
        money = parseInt(prompt('Ваш бюджет', ''));
        marketBudgetVal.textContent = mainList.money = money;
        } while(!money);
    shopName = prompt('Название вашего магазина?', 'TopShop');
    marketNameVal.textContent = mainList.shopName = shopName;
}

buttonOpen.addEventListener('click', getUserAnswer);

//Добавить товары в массив в объекте
function choseGods() {
    let i = 0;
    while(i < googsItem.length) {
        console.log(googsItem[i].value);
        if (googsItem[i].value !== "") {
            mainList.shopGods.push(googsItem[i].value);
            i++;
        } else {
            i++;
        }
    }
}
buttonGodsItem.addEventListener('click', () => {
    choseGods();
    marketGodsVal.textContent = mainList.shopGods;
});
inputChooseItem.addEventListener('keyup', () => {
    marketItemsVal.textContent = inputChooseItem.value;
});

//Часы работы магазина
function changeTimeInput () {
    let time = inputTimeValue.value;
    if (time >= 10 && time < 20) {
        mainList.open = true;
        marketIsopenVal.style.background = 'green';
    } else {
        mainList.open = false;
        marketIsopenVal.style.background = 'red';
    }
}

inputTimeValue.addEventListener('change', changeTimeInput);

//Оформить расчет дневного бюджета как функцию
function calcDayBudget() {
    inputCountBudgetValue.value = money/30;
}

buttonCountBudget.addEventListener('click', calcDayBudget);

//
function hireEmployers() {
    mainList.employers = '';
    for (let i = 0; i < employerNames.length; i++ ) {
        if (employerNames[i].value) {
            marketEmployersVal.textContent = mainList.employers += employerNames[i].value + ',';         
		} else {
            i++;
        }
    }
}
buttonHireEmployers.addEventListener('click', hireEmployers);
