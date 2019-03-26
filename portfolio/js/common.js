$(function() {

    $('.main-slider').slick({
        vertical: true,
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        speed:1000,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
       {
         breakpoint: 992,
         settings: {
         arrows: false,
         dots: false,
         slidesToShow: 1
         }
       },

     ]
    });

});

$(function() {

    $('.video-slider').slick({
        vertical: true,
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        speed:1200,
        slidesToScroll: 1,
        //autoplay: true,

        responsive: [
       {
         breakpoint: 992,
         settings: {
         arrows: false,
         autoplay: true,
         dots: false,
         slidesToShow: 1
         }
       },

     ]
    });

});

$(function() {

    $('.side1-slider').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay: true,

        responsive: [
       {
         breakpoint: 1120,
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

// titleShow();
// function titleShow(){
//   const block = document.querySelectorAll('.portfolio-block');
//   block.forEach(item=>{
//     const blockTitle = item.querySelector('h3');
//     item.onmouseover = function(){  
//       blockTitle.classList.add('active');
//     };
//     item.onmouseout = function(){  
//       blockTitle.classList.remove('active');
//     };
//   });
// }