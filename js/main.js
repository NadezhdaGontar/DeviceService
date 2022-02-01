$(function(){
  

$('.menu__btn').click(function(event){
  $('.menu__btn, .nav').toggleClass('active');

$('body').toggleClass('lock')
});
 $(".menu a").on("click", function (e) {
		//отменяем стандартную обработку нажатия по ссылке
		e.preventDefault();

		//забираем идентификатор блока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 4000);
	});
});