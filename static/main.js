/* globals $ */

$('.contributor-name a').on('click', function (e) {
  e.preventDefault();
  var $this = $(this);
  $(this).parents('.contributor').find('p.biography').toggle();
  $(this).parents('.contributor').find('img').toggle();
  return this;
});
