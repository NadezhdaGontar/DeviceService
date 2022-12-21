$(function(){
  $('.about__slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  })
// 1. Скрыть все content box
      contentBoxes.forEach(function (item) {
        item.classList.add('hidden');
    });
// 2. Выбрать нужный content box и показать его
        
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    });     

const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', showContent);
});

function showContent() {
    this.nextElementSibling.classList.toggle('hidden');
}
function burgerMenu(selector) {
  let menu =  $(selector);
  let button = menu.find('.header__menu-btn');/*передаем кнопку*/
  let links = menu.find('.header__menu-link');/*передаем класс ссылка*/
  

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });
  links.on('click', () => toggleMenu());
 
  function toggleMenu(){
    menu.toggleClass('active');/*класс, который добавляется чтобы работало меню*/

    if(menu.hasClass('active')) { /*класс, который добавляется чтобы работало меню*/
      $('body').css('overflow', 'hidden');
    }else {
      $('body').css('overflow', 'visible');
    }
  }
}
burgerMenu('.header__menu-inner');/*передаем класс обертки, которая содержит кнопку и меню*/
