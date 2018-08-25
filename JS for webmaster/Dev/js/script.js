
window.addEventListener('DOMContentLoaded', function () {
    let infoHeader = document.getElementsByClassName('info-header')[0],
        infoHeaderTab = document.getElementsByClassName('info-header-tab'),
        infoTabContent = document.getElementsByClassName('info-tabcontent');
    //console.log(infoTabContent);
    function hideTabContents(a) {
        for(let i = a; i < infoTabContent.length; i++) {
            infoTabContent[i].classList.remove('show');
            infoTabContent[i].classList.add('hide');
        }
    }
    hideTabContents(1);
    function showTabContents(d) {
        if(infoTabContent[d].classList.contains('hide')) {
            hideTabContents(0);
            infoTabContent[d].classList.remove('hide');
            infoTabContent[d].classList.add('show');
        }
    }
    infoHeader.addEventListener('click', function (event) {
        let target = event.target;
        if(target.className === 'info-header-tab') {
            for(let i = 0; i < infoHeaderTab.length; i++) {
                if(target === infoHeaderTab[i]) {
                    showTabContents(i);
                    break;
                }
            }
        }
    })
});