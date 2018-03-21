// Navigation Scroll - ljepo radi materem
$('.navbar-collapse a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
    $('.s1').removeClass('active');
	$('.s2').removeClass('active');
	$('.s4').removeClass('active');
	$('.s3').removeClass('active');
	this.parent(".nav-item").addClass('active');
});
