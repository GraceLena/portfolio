$(function() {
/********************************************************************************
                                  MENU
********************************************************************************/
		$('.fa-bars').on('click', function() {
			
			createMenu();

			$('.fa-bars').css({'display': 'none'});

			$('.header__list-container').css({
				'display': 'flex',
				'cursor': 'default',
				'background-color': 'rgba(0, 0, 0, 0.75)',
				'width': '100%',
   				'height': '100%',
   				'position': 'fixed',
   				'left': '0',
   				'top': '0',
   				'z-index': '2'
			});
			$('.header__list-container_mini').css({
				'display': 'inline',
				'background-color': '#FFF',
				'width': '250px',
				'height': '100%',
				'padding-top': '20px',
				'margin': '0',
				'list-style': 'list-style-type'
			});
			$('.header__list-item_mini').css({
				'display': 'block',
				'font-size': '16px',
				'border-bottom': '1px solid #E5E5E5',
				'margin': '0 25px',
				'padding': '20px'
			});
			$('.header__list-item_mini *').css({
				'text-decoration': 'none',
				'color': 'black'
			});
			$('.header__list-item_red *').css({
				'color': '#FC97AF',
				'border-bottom': '1px solid #FC97AF'
			});
		});

	$(window).on('click', function(event) {
		if(event.target.className == 'fa fa-times' ||
			event.target.className == 'header__list-container' ||
			event.target.tagName == 'A') {
			$('.header__list-container').remove();
			$('.fa-bars').css({'display': 'inline'});
		}	
	});

function createMenu() {
	$('.menu-bars').append($('<div class="header__list-container"></div>'));
	$('.header__list-container').append($('<ul class="header__list-container_mini"></ul>'));
	$('.header__list-container_mini').append('<li class="header__list-item_mini"><a href="#service">Услуги</a></li>');
	$('.header__list-container_mini').append('<li class="header__list-item_mini header__list-item_red"><a href="#portfolio">Портфолио</a></li>');
	$('.header__list-container_mini').append('<li class="header__list-item_mini"><a href="#price">Стоимость</a></li>');
	$('.header__list-container').append($('<i class="fa fa-times"></i>'));
}

/********************************************************************************
                                  BUTTONS
********************************************************************************/
	$('.btn_call').on('click', function() {
		createPopUp();

			$('.header__popup-form').css({
				'height': '320px',
			});
	});

	$('.btn_filled').on('click', function() {
		createPopUp();

			$('.header__popup-form').css({
				'height': '250px',
			});
			$('label[for="popup-email"]').css({'display': 'none'});
			$('#popup-email').css({'display': 'none'});			
	});

	$(window).on('click', function(event) {
		if(event.target.className == 'fa fa-times' ||
			event.target.className == 'header__popup-container') {
			$('.header__popup-container').remove();
		}	
	});

function createPopUp() {
	$('.popup').append($('<div class="header__popup-container"></div>'));
	$('.header__popup-container').append($('<i class="fa fa-times"></i>'));
	$('.header__popup-container').append($('<form class="header__popup-form"></form>'));
	
	$('.header__popup-form').append($('<label class="header__popup-text" for="popup-name">Ваше имя:</label>'));
	$('.header__popup-form').append($('<input type="text" class="header__popup-input popup-name" id="popup-name" name="name" required>'));
	
	$('.header__popup-form').append($('<label class="header__popup-text" for="popup-phone">Ваш телефон:</label>'));
	$('.header__popup-form').append($('<input type="text" class="header__popup-input popup-phone" id="popup-phone" name="phone" required>'));

	$('.header__popup-form').append($('<label class="header__popup-text" for="popup-email" id="label-email">Ваша почта:</label>'));
	$('.header__popup-form').append($('<input type="text" class="header__popup-input popup-email" id="popup-email" name="email">'));

	$('.header__popup-form').append($('<button type="submit" class="header__popup-btn">Заказать звонок</button>'));	
			
	$('.header__popup-container').css({
		'display': 'flex',
		'flex-direction': 'column',
		'justify-content': 'center',
		'align-items': 'center',
		'background-color': 'rgba(0, 0, 0, 0.75)',
		'width': '100%',
   		'height': '100%',
   		'position': 'fixed',
   		'left': '0',
   		'top': '0',
   		'z-index': '2'
	});
	$('.header__popup-form').css({
		'background-color': '#FFF',
		'width': '320px',
		'height': '250px',
		'padding': '35px',
		'margin': '0'
	});
	$('.header__popup-btn').addClass('btn_empty');
	$('.header__popup-btn').css({'margin-top': '30px'});
	$('.fa-times').css({'padding': '0 0 5px 350px'});
	$('.header__popup-text').css({
		'display': 'block',
		'margin-bottom': '5px',
		'color': '#8993AD',
		'font-size': '14px',
		'font-weight': 'normal'
	});
	$('.header__popup-input').css({
		'margin-bottom': '20px',
		'padding': '0 10px',
		'width': '250px',
		'height': '30px'				
	});
}

/********************************************************************************
                                  SLIDER
********************************************************************************/
	var slideNow = 1;
	var translateWidth = 0;
	var slideInterval = 2000;
	var navBtnId = 0;

	function nextSlide() {
		var slideCount = $('.portfolio__items').children().length + 1 - Math.round($('.portfolio__viewport').width() / $('.portfolio__item').width());

		if ((slideNow == slideCount || slideNow <= 0 || slideNow > slideCount)) {
			$('.portfolio__items').css('transform', 'translate(0, 0)');
			slideNow = 1;
		} else {
			translateWidth = -$('.portfolio__item').width() * (slideNow);
			$('.portfolio__items').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow++;
		}
	}

	function prevSlide() {
		var slideCount = $('.portfolio__items').children().length + 1 - Math.round($('.portfolio__viewport').width() / $('.portfolio__item').width());

		if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
			translateWidth = -$('.portfolio__item').width() * (slideCount - 1);
			$('.portfolio__items').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow = slideCount;
		} else {
			translateWidth = -$('.portfolio__item').width() * (slideNow - 2);
			$('.portfolio__items').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow--;
		}
	}

		$(document).ready(function () {
			var switchInterval = setInterval(nextSlide, slideInterval);

			$('.portfolio__viewport, .portfolio__nav-btns, .portfolio__l-arrow, .portfolio__r-arrow').hover(function(){
				clearInterval(switchInterval);
			},function() {
				switchInterval = setInterval(nextSlide, slideInterval);
			});
		});

		$('.portfolio__r-arrow').click(function() {
			nextSlide();
		});

		$('.portfolio__l-arrow').click(function() {
			prevSlide();
		});
		
		$('.portfolio__nav-btn').click(function() {
			navBtnId = $(this).index();

			if (Math.round($('.portfolio__viewport').width() / $('.portfolio__item').width()) == 2 && navBtnId == 2) navBtnId = 1;
			
			translateWidth = -$('.portfolio__item').width() * (navBtnId);
			$('.portfolio__items').css({
				'transform': 'translate(' + translateWidth + 'px, 0)',
				'-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
				'-ms-transform': 'translate(' + translateWidth + 'px, 0)',
			});
			slideNow = navBtnId + 1;		
		});
	});