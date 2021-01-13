import math;

$(document).ready(function(){

  $(".big-box").click(()=>{
  	$("p").toggle();
  	$(this).css("background","rbg("+math.random(0,255)+math.random(0,255)+math.random(0,255)")");
  });
  
	

}); 