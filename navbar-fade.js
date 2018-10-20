$(function() {
    var a = $(".transparentb");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 1340) {
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
    var a = $("#headx");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 2050) {
            a.addClass("grey-text text-darken-4");
			 
        } else {
            a.removeClass("grey-text text-darken-4");
        }
    });
});
