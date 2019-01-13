function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}

$(window).scroll(function() {
  youtubeVidScroll();
  //startMentoring();
});


function youtubeVidScroll() {

  var wScroll = $(window).scrollTop();

  console.log(wScroll)

  $('.skill-strip').css('background-position','center -'+ wScroll +'px');
  $('.parallax').css('background-position','center -'+ wScroll/4 +'px');
  $('.parallax-2').css('background-position','center -'+ wScroll/2 +'px');
  if(wScroll > 2000){
    $('.parallax-3').css('background-position','center -'+ (wScroll-2000)/4 +'px');
  }
}

function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
