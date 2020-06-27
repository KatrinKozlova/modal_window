window.addEventListener('DOMContentLoaded', function() {

    'use strict';
    
    let more = document.querySelector('.more'),  //button
		overlay = document.querySelector('.overlay'),
		close = document.querySelector('.popup-close');

	more.addEventListener('click', function() {
		overlay.style.display = 'block';
		this.classList.add('more-splash'); //connect css window modal style
		document.body.style.overflow = 'hidden'; // disable page scrolling as soon as we open the modal window
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';
		more.classList.remove('more-splash');
		document.body.style.overflow = '';
    });
});