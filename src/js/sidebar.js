var slideout = new Slideout({
      'panel': document.getElementById('panel'),
      'menu': document.getElementById('menu'),
      'padding': 256,
      'tolerance': 70
});

// Toggle button
document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
  $('.js-slideout-toggle').hide();
});

document.querySelector('.js-slideout-toggle2').addEventListener('click', function(){
  slideout.toggle();
  $('.js-slideout-toggle').show();
})