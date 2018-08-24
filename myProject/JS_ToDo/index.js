const buttonAdd = document.getElementById('add');
const mainUl = document.getElementById('mainUl');
let newTask = document.getElementById('newTask');
const date = new Date();

function createItem(task) {
    if(newTask.value) {
            const li = document.createElement('li');
            const buttonDel = document.createElement('i');
            buttonDel.className = "fas fa-trash-alt delete";
            const spanText = document.createElement('span');
            spanText.innerHTML = newTask.value;
            const br = document.createElement('br');
            const spanDate = document.createElement('span');
            spanDate.className = "date";
            spanDate.innerHTML = date.toLocaleString('ru', {year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric'});
            mainUl.appendChild(li);
            li.appendChild(spanText);
            li.appendChild(buttonDel);
            li.appendChild(br);
            li.appendChild(spanDate);

            buttonDel.addEventListener('click', removeItem);
            newTask.value = "";
            return li;
        }
    save();
}
function addItem () {
    const li = createItem(newTask.value);
}
buttonAdd.onclick = addItem;
function removeItem() {
    this.parentNode.parentNode.removeChild(this.parentNode);
}
