jQuery(document).ready( function ($) {
	$(function(){
	  $('#header_nav').data('size','big');
	});

	
		$(window).scroll(function(){
			togleHeader();
		});
		
		$(window).resize(function() {
			togleHeader();
		});
	function togleHeader() {
	if($(document).scrollTop() > 300 || $(window).width() < 768)
	{
		
			//$('#header_nav').data('size','small');
			$('#header_nav').removeClass('big').addClass('small');
			$('#header_nav').stop().animate({
				height:'50px'
			},100, function() {
			//	$('body').css('padding-top', '70px');
			});
			$("#logo-img-desktop").attr("src","assets/images/bp-logo-collapsed.png");
	}
	else
	{
			///$('#header_nav').data('size','big');
			$('#header_nav').removeClass('small').addClass('big');
			$('#header_nav').stop().animate({
				height:'400px'
			},400, function () {
				$("#logo-img-desktop").attr("src","assets/images/bp-logo-big-transparent.png");
				
			//	$('body').css('padding-top', '420px');
			});
			 
	}
}
});

