// var startingPosition = $(".cloud").css("left");
// alert(startingPosition);

//$(".cloud").animate({left: '2000px'}, 10000);



document.addEventListener('scroll', () => {
  document.documentElement.dataset.scroll = window.scrollY;
});
