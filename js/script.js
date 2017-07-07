$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items : 1,
		nav : true,
		navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
		dots : false
	});
	$('#triggermenu').click(function(e){
		e.preventDefault();
		$('#mobile').toggle();
	});
	$('#cerrarmobile').click(function(e){
		e.preventDefault();
		$('#mobile').hide();
	});
});