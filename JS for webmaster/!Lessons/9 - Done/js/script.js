
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
    });
    //Timer
    let deadline = '2018-08-28';
    function getTimeRemaining(endtime) {
          let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60),
            hours = Math.floor( (t/(1000*60*60)));

          return {
              'total': t,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds,
          };
    }
    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');
        
        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();
        let timeInterval = setInterval(updateClock, 1000)
    }
    setClock('timer', deadline);

    //Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';

    });
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    })


});

























