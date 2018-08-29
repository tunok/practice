window.addEventListener('DOMContentLoaded', function () {
//HideTABS
    let infoHeader = document.getElementsByClassName('info-header')[0],
        infoHeaderTab = document.getElementsByClassName('info-header-tab'),
        infoTabContent = document.getElementsByClassName('info-tabcontent');
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
    let deadline = '2018-07-20';
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
        }
    }
    function setClock(id, endtime) {
        if ((Date.parse(endtime) - Date.parse(new Date())) > 0) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds');
            function updateClock() {
                let t = getTimeRemaining(endtime);
                    hours.innerHTML = t.hours;
                    minutes.innerHTML = t.minutes;
                    seconds.innerHTML = t.seconds;
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
            updateClock();
            let timeInterval = setInterval(updateClock, 1000);
        } else {
            return {
                'total': 0,
                'hours': 0,
                'minutes': 0,
                'seconds': 0,
            }
        }
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
    });
//Form
    let message = {
        loading: "Загрузка...",
        success: "Спасибо, мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };
    let form = document.getElementsByClassName('main-form')[0],
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);
//AJAX
    let request = new XMLHttpRequest();
    request.open("POST", 'server.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    let formData = new FormData(form);
    request.send(FormData);

    request.onreadystatechange = function() {
        if(request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if(request.readyState === 4) {
            if(request.status === 200 && request.status < 300) {
                //Add content
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        }
    };
    for( let i = 0; i < input.length; i++) {
        input[i].value = '';
        }

    });

//flowingPageAnimation
    function animate(draw, duration) {
        let start = performance.now();
        requestAnimationFrame(
            function animate(time) {
                let timePassed = time - start;
                if (timePassed > duration) {
                    timePassed = duration;
                }
                draw(timePassed);
                if (timePassed < duration) {
                    requestAnimationFrame(animate);
                }
            })
    }
    let menu = document.getElementsByTagName('nav')[0];
    menu.addEventListener('click', function(event) {
        event.preventDefault();
        animate(function(timePassed) {
            let target = event.target;
            let section = document.getElementById(target.getAttribute('href').slice(1));
            window.scrollBy(0, section.getBoundingClientRect().top / 20 - 3);
        }, 1500)
    });
//Slider
    let slideIndex = 1,
        slides = document.getElementsByClassName('slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dot = document.getElementsByClassName('dot');

    showSlides(slideIndex);

    function  showSlides(n) {
        if ( n > slides.length) {
            slideIndex = 1;
        }
        if ( n < 1) {
            slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        for (let i = 0; i < dot.length; i++) {
            dot[i].classList.remove('dot-active');
        }
        slides[slideIndex - 1].style.display = 'block';
        dot[slideIndex - 1].classList.add('dot-active');
    }
    function plusSlides(n) {
        showSlides(slideIndex += n)
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    prev.addEventListener('click', function () {
        plusSlides(-1);
    });
    next.addEventListener('click', function () {
        plusSlides(1);
    });
    dotsWrap.addEventListener('click', function (event) {
        for( let i = 0; i < dot.length + 1; i++) {
            if (event.target.classList.contains('dot') && event.target === dot[i - 1]) {
                currentSlide(i);
            }
        }
    })
//Calc


});

























