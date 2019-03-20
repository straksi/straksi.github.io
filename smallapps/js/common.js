$(function() {

    $('.slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

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

});

$(function() {

    $('.feedback-slider').slick({
        infinite: true,
        arrows: false,
        dots:true,
        speed: 750,
        cssEase: 'linear',
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,

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

});


$(function() {
new WOW().init();
});

$(function() {
  $(".feature-nav__item").click(function(i) {
  i.preventDefault();
  $(".feature-nav__item").removeClass('active');
  $(this).addClass('active');
  //$('.feature-content__img img').attr('src', 'img/user1.png')-->Смена картинки по клику
})
    });
    $(function() {
      $(".fa-times").click(function() {
      $(".fa-times").toggleClass('animate');
    })
        });

    var humb = function() {
        $('.hamburger').click(function() {
            $('.nav-list').animate({
                right: '0'
            }, 700);
        $(".fa-times").removeClass('animate');
        });
        $('.nav-close, #header, #features').click(function() {
            $('.nav-list').animate({
                right: '-400px'
            }, 700);
        });
    };

    $(document).ready(humb);

    var main = function() {
        $('.nav-feature').click(function() {
            $('.feature-nav').animate({
                left: '0'
            }, 700);
        $(".fa-times").removeClass('animate');
        });
        $('.nav-feature_close').click(function() {
            $('.feature-nav').animate({
                left: '-350px'
            }, 700);
        });
    };

    $(document).ready(main);

//$('input').on('change', function() {$('#subscribes h2').text($(this).val() );}); -->ПРисвоение h2 текса, по изменению состояния в inputы

//$('.btn').on('click', function(){$('#header').css('background', 'url(../img/mobile.png) no-repeat center center');});-->Добавление CSS св-во елементу(ПЛОХАЯ ИДЕЯ!!)

    // $(document).ready( function()  {
    //     $('#SumBtn').on('click',function(){
    //         var  numberOne;
    //         var  numberTwo;
    //         var  summ;
    //         numberOne = $('#NumOne').val();
    //         numberTwo = $('#NumTwo').val();
    //         numberOne = parseInt(numberOne);
    //         numberTwo = parseInt(numberTwo);
    //         if ( isNaN( numberOne ) ){
    //             numberOne = 0;
    //         }
    //         if ( isNaN( numberTwo ) ){
    //             numberTwo = 0;
    //         }
    //         summ = numberOne + numberTwo;
    //         $('#Summa').text(summ);
    //     });
    // }); --<ВЫВОД СУММЫ ЗНАЧЕНИЙ ИЗ INPUTЭОВ В SPAN

// Меняем картинку по клику
    $(document).ready( function()  {
        $('.feature-nav__item').on('click',function(){
            var colorPath;
            colorPath = $(this).attr('data-img-path');
            $('.feature-content__img img').fadeOut(100, function(){
            $(this).attr('src', colorPath).fadeIn(100);
            });
        });
    });
    $(document).ready( function()  {
        var textTwo = $('#textTwo').text();
        var titleTwo = $('#titleTwo').text();
        $('#headingTwo').on('click', function(){
            $('#mainText').text(textTwo);
            $('#mainTitle').text(titleTwo);
        });
        $('#headingOne').on('click', function(){
            $('#mainText').text($('#textOne').text());
            $('#mainTitle').text($('#titleOne').text());
        });
        $('#headingThree').on('click', function(){
            $('#mainText').text($('#textThree').text());
            $('#mainTitle').text($('#titleThree').text());
        });
        $('#headingFour').on('click', function(){
            $('#mainText').text($('#textFour').text());
            $('#mainTitle').text($('#titleFour').text());
        });
        $('#headingFive').on('click', function(){
            $('#mainText').text($('#textFive').text());
            $('#mainTitle').text($('#titleFive').text());
        });
    });
$(document).ready( function()  {
    var modelSpecs, modelPrice, modelSpecsHolder, modelPriceHolder;

    modelSpecsHolder = $('#modelSpecs');
    modelPriceHolder = $('#modelPrice');
    modelPrice = 0;
    modelSpecs = ' ';
    calculatePrice();
    compileSpecs();
    $('#mainform input').on('change', function(){
        calculatePrice();
        compileSpecs();
    });
    function calculatePrice() {
        modelPriceEngine = $('input[name=engine]:checked', '#mainform').val();
        modelPriceEngine = parseInt(modelPriceEngine);
        modelPriceTransmission = $('input[name=transmission]:checked', '#mainform').val();
        modelPriceTransmission = parseInt(modelPriceTransmission);
        modelPricePackage = $('input[name=package]:checked', '#mainform').val();
        modelPricePackage = parseInt(modelPricePackage);
        modelPrice= modelPriceEngine + modelPriceTransmission + modelPricePackage;
        modelPriceHolder.text( addSpace(modelPrice) + ' RUB');
    };
    function compileSpecs() {
        modelSpecs = $('input[name=engine]:checked + label', '#mainform').text();
        modelSpecs = modelSpecs + '; ' + $('input[name=transmission]:checked + label', '#mainform').text();
        modelSpecs = modelSpecs + '; '  + $('input[name=package]:checked + label', '#mainform').text();
        modelSpecsHolder.text(modelSpecs);
    };
    function addSpace(nStr){
        nStr += '';
        x = nStr.split('.');
        x1 = x[0];
        x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }
        return x1 + x2;
    };
});
