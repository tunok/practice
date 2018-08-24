//поменять местами элементы списка 
let li = document.getElementsByTagName('li');
let ul = document.querySelector('ul').insertBefore(li[2], li[1]);
//-----------------------
//удалить рекламу
let adv = document.querySelector('.adv');
let advParent = document.querySelectorAll('.column')[1].removeChild(adv);
//----------------------- 
//изменить текст абзаца
let title = document.getElementById('title');
title.innerText = 'Мы продаем только подлинную технику Apple';
title.style.color = 'red';
//-----------------------
//изменить фон
let bkg = document.querySelector('body');
bkg.style.background = 'url(img/apple_true.jpg) top left';
bkg.style.backgroundSize = 'cover';
//-----------------------
//пройти опрос
let button = document.createElement('button');
button.innerHTML = 'ПРОЙТИ ОПРОС';
let promptDiv = document.getElementById('prompt');
promptDiv.appendChild(button);
button.style.background = 'green';
button.style.width = '150px';
button.style.height = '50px';
button.style.borderRadius = '25px';
button.style.color = 'yellow';
button.style.fontWeight = "bold";
button.style.marginTop = '50px';
button.style.cursor = 'pointer';
let answer;
function getPrompt () {
    answer = prompt('Что Вы думаете о технике Apple?', '');
    promptDiv.removeChild(button);
    let p = document.createElement('p');
    p.innerHTML = answer;
    p.style.marginTop = '50px';
    p.style.color = 'yellow';
    p.style.fontSize = '24px';
    p.style.fontStyle = 'Italic';
    promptDiv.appendChild(p);
}
button.onclick = getPrompt;
