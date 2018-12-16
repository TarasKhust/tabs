const tabs = () => {
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
};

module.exports = tabs;
