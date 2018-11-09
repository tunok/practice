'use strict';
//variables for existing id
var buttonAdd = document.getElementById('add'),
	mainUl = document.getElementById('mainUl'),
	newTask = document.getElementById('newTask'),
	date = new Date();
	
//function for create new LI item
function createItem(task) {
	if(!newTask.value) {
		confirm("Заполните поле!");
	}
    if (newTask.value) {
        var li = document.createElement('li');
        var buttonDel = document.createElement('i');
        buttonDel.className = "fas fa-trash-alt delete";
        var spanText = document.createElement('span');
        spanText.innerHTML = newTask.value;
        var br = document.createElement('br');
        var spanDate = document.createElement('span');
        spanDate.className = "date";
        spanDate.innerHTML = date.toLocaleString('ru', { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
        mainUl.appendChild(li);
        li.appendChild(spanText);
        li.appendChild(buttonDel);
        li.appendChild(br);
        li.appendChild(spanDate);

        buttonDel.addEventListener('click', removeItem);
        newTask.value = "";
    }
    //save(); //for localStorage
}
// function and button for create and add new LI item
function addItem() {
    var li = createItem(newTask.value);
}
buttonAdd.addEventListener('click', addItem);

//EventListener for add in created LI item
function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}