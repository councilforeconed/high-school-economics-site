$('.contributor-name a').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.contributor').find('p.biography').slideToggle();
  $(this).parents('.contributor').find('img').slideToggle();
  return this;
});
