$('.contributor-name a').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.contributor').find('p.biography').toggle();
  $(this).parents('.contributor').find('img').toggle();
  return this;
});
