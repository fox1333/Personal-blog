//Search

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

const searchBtn = document.querySelector('.search-btn');
const cancelBtn = document.querySelector('.cancel-btn');
const searchBox = document.querySelector('.search-box');
const searchInput = document.querySelector('input');
const searchData = document.querySelector('.seatch-data');

searchBtn.onclick = () => {
	searchBox.classList.add('active__search');
	searchInput.classList.add('active__search');
	searchBtn.classList.add('active__search');
	cancelBtn.classList.add('active__search');

	if (searchInput.value != "") {
		let values = searchInput.value;
		searchData.classList.remove('active__search');
		searchData.innerHTML = "You'r just dialed " + "<span>" + values + "</span>";
	} else {
		searchData.innerHTML = ""
	}
}
$(searchInput).keyup(function (e) {
	if (e.keyCode === 13) {
		$(searchBtn).click();
	}
});
cancelBtn.onclick = () => {
	searchBox.classList.remove('active__search');
	searchInput.classList.remove('active__search');
	searchBtn.classList.remove('active__search');
	cancelBtn.classList.remove('active__search');
	searchData.classList.add('active__search');
	searchInput.value = "";
}

//Slider
$(document).ready(function () {
	$('.icon-menu').click(function (event) {
		$('.icon-menu,.menu__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.spoilers').click(function (event) {
		$(this).toggleClass('active');
		$('.header__item').toggleClass('active');
	});
	$('.slider').slick({
		dots: true,
		arrows: true,
		accessibility: false,
		slidesToShow: 1,
		initialSlide: 1,
		CenterMode: true,
		vertical: true,
		vericalSwiping: true,
		autoplay: true,
		autoplaySpeed: 3000,
		draggable: true,
		swipe: true,
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]

	});
});
function ibg() {

	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
}

ibg();

"use strict"
//Form
document.addEventListener('DOMContentLoaded', function () {
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);


	async function formSend(e) {
		e.preventDefault();

		let error = formValidate(form);

		if (error === 0) {

		} else {
			alert('Заполните поле!');
		}
	}

	function formValidate(form) {
		let error = 0;
		let formReq = document.querySelectorAll('._req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];
			formRemoveError(input);

			if (input.classList.contains('_email')) {
				if (emailTest(input)) {
					formAddError(input);
					error++;
				}
			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
				formAddError(input);
				error++;
			} else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
		}
		return error;
	}
	function formAddError(input) {
		input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}
	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});

new Swiper('.swiper-container', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-arrow-next',
		prevEl: '.swiper-arrow-prev',
	},
});

new Swiper('.block-swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 1,
	simulateTouch: false,
	autoHeight: true,
	// Navigation arrows
	navigation: {
		nextEl: '.button__next',
		prevEl: '.button__prev',
	},
});

new Swiper('.recomended-post__swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	spaceBetween: 30,
	// Navigation arrows
	navigation: {
		nextEl: '.slide-button-next',
		prevEl: '.slide-button-prev',
	},
});