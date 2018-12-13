const slider = require('./slider');
const form = require('./form');
const modal = require('./modal');

(window.addEventListener('DOMContentLoaded', () => {
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

  modal(); // Modal
  form(); // Form
  slider(); // Slider
}));
