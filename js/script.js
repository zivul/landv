$(document).ready(function() {      

	/*$('.search').on('click', function(){ //Действие поисковика при клике
	$('.main-menu .navbar-form').slideToggle(); //Выдвижение поисковика внутри меню
	});

	$('.carousel').carousel({      //Функция для карусели
  interval: 2000                   //Интервал в сек (2 сек)
	});  */
	
	//Задержка модального окна при открытии страницы (popup-реклама)
	/*setTimeout(function() {
    $("#light").modal('toggle');
	}, 3000); // 5 сек*/
	
	 //В поле ввода убираем текст при фокусе
	  /* $('input[type="text"]').focus(function(){
	        $(this).data('placeholder',$(this).attr('placeholder'))
	        $(this).attr('placeholder','');
	      });
	      $('input[type="text"]').blur(function(){
	        $(this).attr('placeholder',$(this).data('placeholder'));
	      });
		  
		//Маска для телефона:
	    $("#phone").mask("+7(999) 999-9999");

		//Плавный переход с меню на блоки:
		  $("a[href*=#]").bind("click", function(e){
	       var anchor = $(this);
	       var name = anchor.attr("href").replace(new RegExp("#", "gi"), "");
	       $('html, body').stop().animate({
	           scrollTop: $("a[name=" + name + "]").offset().top
	       }, 600);
	       e.preventDefault();
	       return false;
	   });
	   
	   //Стрелка вверх
	   $('.scroll_top').click(function(){
		$('html, body').animate({scrollTop: 0}, 1000);
		});*/

		//Анимация
	let wow = new WOW({
		offset: 200   //Высота окна при прокручивании и начала анимации
	});   
	wow.init();

});






