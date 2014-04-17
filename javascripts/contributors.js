var $ = require('jquery');

$('.contributor-name a').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.contributor').find('p.biography').slideToggle();
  return this;
});