//Обработка клика на стрелку вправо
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousels');
	right_carusel(carusel);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousels');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	auto_carousel_right('.carousels:first');
})

// Автоматическая прокрутка
function auto_carousel_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 7000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.carousels', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.carousels', function(){$(this).removeClass('hover')})







//Обработка клика на стрелку вправо
$(document).on('click', ".catalog-button-right",function(){ 
	var catalog = $(this).parents('.catalog');
	right_catalog(catalog);
	return false;
});
//Обработка клика на стрелку влево
$(document).on('click',".catalog-button-left",function(){ 
	var catalog = $(this).parents('.catalog');
	left_catalog(catalog);
	return false;
});
function left_catalog(catalog){
   var block_width = $(catalog).find('.catalog-block').outerWidth();
   $(catalog).find(".catalog-items .catalog-block").eq(-1).clone().prependTo($(catalog).find(".catalog-items")); 
   $(catalog).find(".catalog-items").css({"left":"-"+block_width+"px"});
   $(catalog).find(".catalog-items .catalog-block").eq(-1).remove();    
   $(catalog).find(".catalog-items").animate({left: "0px"}, 200); 
   
}
function right_catalog(catalog){
   var block_width = $(catalog).find('.catalog-block').outerWidth();
   $(catalog).find(".catalog-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(catalog).find(".catalog-items .catalog-block").eq(0).clone().appendTo($(catalog).find(".catalog-items")); 
      $(catalog).find(".catalog-items .catalog-block").eq(0).remove(); 
      $(catalog).find(".catalog-items").css({"left":"0px"}); 
   }); 
}

$(function() {
//Раскомментируйте строку ниже, чтобы включить автоматическую прокрутку карусели
	//auto_right('.catalog:first');
})

// Автоматическая прокрутка
function auto_right(catalog){
	setInterval(function(){
		if (!$(catalog).is('.hover'))
			right_catalog(catalog);
	}, 5000)
}
// Навели курсор на карусель
$(document).on('mouseenter', '.catalog', function(){$(this).addClass('hover')})
//Убрали курсор с карусели
$(document).on('mouseleave', '.catalog', function(){$(this).removeClass('hover')})



//hover, active, animation
$(document).on('click','.container__page a',function(e){
	e.preventDefault();
	$('.container__page a').removeClass('active');
	$(this).addClass('active');
})

//добавление в корзину
$(document).on('click','.add_to-cart',function(){
	$('.basket__number').addClass('basket__number__active');
	$('.basket__number p').css('display','block');
	$counter = $(".basket__number p");
	$counter.text(+$counter.text() + 1);
});
$(document).on('click','.add_to-cart',function(){
	$('.basket__number__menu').addClass('basket__number__active__menu');
	$('.basket__number__menu p').css('display','block');
	$counter = $(".basket__number__menu p");
	$counter.text(+$counter.text() + 1);
});

//плавающее меню
var header = document.querySelector('.container__panel')
document.addEventListener('scroll', function() {
  if (window.pageYOffset >= 400) {
    header.classList.add('back')
  } else {
    header.classList.remove('back')
  }
})


//модальные окна

//basket
$(document).ready(function() {
    var overlay = $('.overlay');
    var open_modal = $('.open_modal');
    var close = $('.modal_close, .overlay');
	var modal = $('.modal_div');
	
     open_modal.click( function(event){
         event.preventDefault();
         var div = $(this).attr('href');
         overlay.fadeIn(400, 
             function(){
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); 
		 });
		
		//$('.modal__header span').html();
		var volue=$('.basket__number p').text();
		$('.modal__header span').html(volue);
     });

     close.click( function(){ 
            modal
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay.fadeOut(400); 
                 }
			 );
			 
			
     });
});


//profile
$(document).ready(function() {
    var overlay__profile = $('.overlay');
    var open_modal__profile = $('.open_modal__profile');
    var close__profile = $('.modal__close__profile, .overlay');
	var modal__profile = $('.modal__profile');
	
     open_modal__profile.click( function(event){
         event.preventDefault();
         var div = $(this).attr('href');
         overlay__profile.fadeIn(400, 
             function(){
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); 
		 });
		
		
     });

     close__profile.click( function(){ 
            modal__profile
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay__profile.fadeOut(400); 
                 }
			 );
			 
			
     });
});

//search
$(document).ready(function() {
    var overlay__search = $('.overlay');
    var open_modal__search = $('.open_modal__search');
    var close__search = $('.modal__close__search, .overlay');
	var modal__search = $('.modal__search');
	
     open_modal__search.click( function(event){
         event.preventDefault();
         var div = $(this).attr('href');
         overlay__search.fadeIn(400, 
             function(){
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); 
		 });
		
		
     });

     close__search.click( function(){ 
            modal__search
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
                     $(this).css('display', 'none');
                     overlay__search.fadeOut(400); 
                 }
			 );
			 
			
     });
});

//search
$(document).ready(function() {
    var overlay__calc = $('.overlay');
    var open_modal__calc = $('.open_modal__calc');
    var close__calc = $('.modal__close__calc, .overlay');
	var modal__calc = $('.modal__calc');
	
     open_modal__calc.click( function(event){
         event.preventDefault();
         var div = $(this).attr('href');
         overlay__calc.fadeIn(400, 
             function(){
                 $(div)
                     .css('display', 'block') 
                     .animate({opacity: 1, top: '50%'}, 200); 
		 });
		
		
     });

     close__calc.click( function(){ 
            modal__calc
             .animate({opacity: 0, top: '45%'}, 200, 
                 function(){ 
					 $(this).css('display', 'none');
					 
                     overlay__calc.fadeOut(400); 
                 }
			 );
			 
			
     });
});

//submenu
$('.container__panel__men p').on('click',function () {
	$('.container__panel__men option').css('display','block');
});
$('.container__panel__men p').mouseout(function () {
	$('.container__panel__men option').css('display','none');
});

//screen
if ($(window).width() < 760) {
	$('body').prepend('<div class="nav"><div class="menu__burger"><span></span><span></span><span></span><span></span></div><div class="container__panel__logo__menu"><a href="#modal4" class="open_modal__calc"> <img src="img/panel/Logo.png" alt="logo"></a></div><div class="container__panel__profile__menu"><a href="#modal2" class="open_modal__profile"><img src="img/panel/Profile.png" alt="logo"></a></div><div class="container__panel__search__menu"><a href="#modal3" class="open_modal__search"><img src="img/panel/Search.png" alt="logo"></a></div><div class="container__panel__basket__menu" ><div class="basket__number__menu"><p>0</p></div><a href="#modal1" class="open_modal"><img src="img/panel/basket.png" alt="logo"></a></div></div>');
	$('.colorline').addClass('margin-header-bottom');
	$(document).on("click",".menu__burger",function () {
		$(this).closest('body').toggleClass('menu_state_open');
		$('.container__panel').toggleClass('menu__content');
	  })
	  $(document).on("click",".panel__menu",function () {
		$(this).closest('body').toggleClass('menu_state_open');
		$('.container__panel').toggleClass('menu__content');
	  })
	
}
else  {
	$('body').remove('.nav');
	$('.colorline').removeClass('margin-header-bottom');
}


//calc
$(document).on('click','',function(){
	var s1 =$('.calc__one input[type="number"]').val();
	var sum1=s1*10000;
	$('.calc__one input[type="text"]').val(sum1+"р");

	var s2 =$('.calc__two input[type="number"]').val();
	var sum2=(s2*15000)/100*125;
	$('.calc__two input[type="text"]').val(sum2+"р");

	var s3 =$('.calc__three input[type="number"]').val();
	var sum3=(s3*20000)/100*150;
	$('.calc__three input[type="text"]').val(sum3+"р");
})


