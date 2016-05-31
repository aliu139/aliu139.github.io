$(document).ready(function() {
	slideout = new Slideout({
	      'panel': document.getElementById('panel'),
	      'menu': document.getElementById('menu'),
	      'padding': 256,
	      'tolerance': 70
	});

	document.querySelector('.js-slideout-toggle2').addEventListener('click', function(){
	  slideout.toggle();
	  $('.js-slideout-toggle').css('visibility','visible');
	});
});