const modal = () => {
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
};

module.exports = modal;