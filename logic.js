document.addEventListener("DOMContentLoaded", function(){
	$("#load-wrapper").delay(700).fadeOut('slow');
	
	$("#loader")
		.delay(300)
		.fadeOut();
});
AOS.init()
$("#container, #title0").mousemove(function(e) {
  parallaxIt(e, ".shape1", -50);
  parallaxIt(e, ".shape2", -80);
  parallaxIt(e, ".scroll-downs", -20);
  
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
    $(".shape1, .shape2, .scroll-downs, .btn-flat").css({"-webkit-filter": "blur("+pxlCount+"px)","-moz-filter": "blur("+pxlCount+"px)","filter": "blur("+pxlCount+"px)" })     
});
$(function() {
    var a = $(".transparentb");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1400) {
            a.removeClass('transparentb').addClass("visible");
			  $('a.parent').on("click", function (e) {
      e.preventDefault();
    });
        } else {
            a.removeClass("visible").addClass('transparentb');
        }
    });
});
$(function() {
    var div = $(".card-main0");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1800) {
            div.addClass("blur");
			 
        } else {
            div.removeClass("blur");
        }
    });
});
$(function() {
    var div = $(".card-main1");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 2100) {
            div.addClass("blur");
			 
        } else {
            div.removeClass("blur");
        }
    });
});




for (var i = 0; i < 100; i++) {
  var star = '<div href="#start" class="star" style="animation: twinkle '+((Math.random()*5) + 5)+'s linear '+((Math.random()*5) + 5)+'s infinite; top: '+Math.random()*$(window).height()+'px; left: '+Math.random()*$(window).width()+'px;"></div>';
  $('body').append(star);
}
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 300, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});