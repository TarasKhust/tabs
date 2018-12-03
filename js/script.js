(window.addEventListener('DOMContentLoaded', () => {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

   /* let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }; // find and deleted class tabs

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }; // add class visible to tabs

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target === tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    }); //changeTabs*/

    class Tabs {
        constructor(tab, info, tabContent) {
            this.tab = tab;
            this.info = info;
            this.tabContent = tabContent;
        }

        hideTabContent (a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }; // find and deleted class tabs

        showTabContent (b) {
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
                            this.hideTabContent(0);
                            this.showTabContent(i);
                            break;
                        }
                    }
                }
            }); //changeTabs
        }
    }


    let object = new Tabs(tab, info, tabContent);

    object.hideTabContent(1);
    object.addEvent();
}));