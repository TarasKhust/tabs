;(window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    class Tabs {
        constructor(tab, info, tabContent) {
            this.tab = tab;
            this.info = info;
            this.tabContent = tabContent;
        }

        static hideTabContent (a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }; // find and deleted class tabs

        static showTabContent (b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }; // add class visible to tabs

        addEvent () {
            info.addEventListener('click', (event) => {
                let target = event.target;
                if (target && target.classList.contains('info-header-tab')) {
                    for (let i = 0; i < tab.length; i++) {
                        if (target === tab[i]) {
                            Tabs.hideTabContent(0);
                            Tabs.showTabContent(i);
                            break;
                        }
                    }
                }
            }); //changeTabs
        }
    }


    const object = new Tabs(tab, info, tabContent);

    Tabs.hideTabContent(1);
    object.addEvent();

    //Timer
    let deadline = '2018-12-27';

    let getTimeRemaining = (gameOver) => {
        let t = Date.parse(gameOver) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    };

    let setClock = (id, gameOver) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

    function updateClock () {
        let t = getTimeRemaining(gameOver);

        function addZero(num){
            if(num <= 9) {
                return '0' + num;
            } else return num;
        }
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }
    };

    setClock('timer', deadline);

    // Modal
    let more = document.querySelector('#about'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    let runModalWindow = () => {
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';

        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        })
    };

    more.addEventListener('click', (event) => {
        let target = event.target;
        if (target.className === 'more' || target.className === 'description-btn') {
            runModalWindow()
        }
    });






    // Form

    let message = {
        loading: 'Загрузка',
        success: 'Спасибо! скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        fragment = document.createDocumentFragment(),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        fragment.appendChild(statusMessage);
        form.appendChild(fragment);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php' );
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        request.send(formData);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else  if (request.readyState === 4 && request.status === 200) {
                statusMessage.innerHTML = message.success;
            } else  {
                statusMessage.innerHTML = message.failure;
            }

        });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }

    });

  // Slider

  let slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');


  let showSlides = (n) => {
      if (n > slides.length) {
          slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }

    slides.forEach((item) => item.style.display = 'none');

    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  };

  showSlides(slideIndex);

  let plusSlides = (n) => {
    showSlides(slideIndex += n);
  };

  let currentSlide = (n) => {
    showSlides(slideIndex = n);
  };

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });

  dotsWrap.addEventListener('click', () => {
      for (let i = 0; i < dots.length + 1; i++) {
          if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
              currentSlide(i);
          }
      } 
  })
}));
