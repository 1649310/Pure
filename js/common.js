$(function() {
	$(".burger").on("click", function() {
	  $(this).toggleClass("open");
	  $(".header__menu  .nav").toggleClass("open");
	});
  });