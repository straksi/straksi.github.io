$('.speech-slider').slick({
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    responsive: [
   {
     breakpoint: 992,
     settings: {
     arrows: false,
     slidesToShow: 1
     }
   },

 ]
});

$('.slider-inside').slick({
  infinite: true,
  speed: 750,
  fade: true,
  cssEase: 'linear',
  arrows: false,
  dots: true,
  autoplay: true,
});


$('.slick-next').on('click', function () {
		if ($('.slider-item.active').index() == -1) {
			$('.slider div:first-child').addClass('active');
		} else {

			$('.slider-item.active').next('.slider-item').addClass('active');
			$('.slider-item.active').prev('.slider-item').removeClass('active');
		}

	});

	$('.slick-prev').on('click', function () {
		if ($('.slider-item.active').index() == -1) {
				$('.slider div:first-child').removeClass('active');/* без действий */
		} else {

			$('.slider-item.active').prev('.slider-item').addClass('active');
			$('.slider-item.active').next('.slider-item').removeClass('active');
		}

	});

    $(document).ready(function () {
        var show = true;
        var countbox = ".values";
        $(window).on("scroll load resize", function () {
            if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
            var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
            var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
            var w_height = $(window).height(); // Высота окна браузера
            var d_height = $(document).height(); // Высота всего документа
            var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
            if (w_top + 700 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
                $('.value-item__count').css('opacity', '1');
                $('.value-item__count').spincrement({
                    thousandSeparator: "",
                    duration: 2500,
                });

                show = false;
            }
        });

    });
