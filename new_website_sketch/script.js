$(document).ready(function(){
	$('.section').click(function(event){
		$(this).find(".content:visible").slideUp(300);
		$(this).find(".content:hidden").slideDown(300);
	}); 
}); 