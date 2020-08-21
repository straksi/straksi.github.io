;(function(factory) {
	'use strict';
	if ( typeof define === 'function' && define.amd ) {
		define(['jquery'], factory);
	} else if ( typeof exports !== 'undefined' ) {
		module.exports = factory(require('jquery'));
	} else {
		factory(jQuery);
	}
}(function($) {
	new WOW().init();
	portfolioBlockShow();
		function portfolioBlockShow(){
		const portfolioBlock = document.querySelectorAll('.portfolio-block');
		for(let i=0; i<portfolioBlock.length; i++){
			const  item = portfolioBlock[i];
			if(i%2){
			item.classList.add('wow', 'fadeInLeft')
			}else{
			item.classList.add('wow', 'fadeInRight')
			}
		}
	}
	//Плавынй переход по нажатию на якорь 
	if( $(".js-scroll").length ){
		$(".js-scroll").on("click", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();
			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;	
			$('body,html').animate({scrollTop: top}, 250, 'linear');
		});
	}
	VanillaTilt.init(document.querySelectorAll('.portfolio-item'), {
		max: 7,
		speed: 400
	});
}));