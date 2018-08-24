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

