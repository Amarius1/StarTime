document.addEventListener("DOMContentLoaded", function(){
	$('.preloader-background').delay(300).fadeOut('slow');
	
	$('.preloader-wrapper')
		.delay(300)
		.fadeOut();
});
AOS.init()
$("#container, #title0").mousemove(function(e) {
  parallaxIt(e, ".shape1", -50);
  parallaxIt(e, ".shape2", -80);
  parallaxIt(e, ".scroll-downs", -10);
  
});

function parallaxIt(e, target, movement) {
  var $this = $("#container");
  var relX = e.pageX - $this.offset().left;
  var relY = e.pageY - $this.offset().top;

  TweenMax.to(target, 1, {
    x: (relX - $this.width() / 2) / $this.width() * movement,
    y: (relY - $this.height() / 2) / $this.height() * movement
  });
}
var pxlCount = 0
$(window).on('scroll', function () {
    pxlCount = $(document).scrollTop()/30;
  	$('p.pxlCount > span').text(pxlCount);
    $(".shape1, .shape2, .scroll-downs").css({"-webkit-filter": "blur("+pxlCount+"px)","-moz-filter": "blur("+pxlCount+"px)","filter": "blur("+pxlCount+"px)" })     
});
