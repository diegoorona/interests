$(document).ready(function(){
	$(".noselect").unbind('mouseenter mouseleave');
	var change = false;
	$('.card').hover(function(){
		$('h2', this).fadeOut(300);
		$('h5', this).fadeTo('fast',1);
	},
	function(){
		$('h2', this).fadeIn(300);
		$('h5', this).fadeTo('fast',0);
	});

	$(document).scroll(function() { 
      if($(this).scrollTop() < 20) {
          $(".nav").css({"background-color" : "rgba(255,255,255,0)", "box-shadow": "" });
          if(change === true)
          	 $(".link").css("color", "white");
       } else {
       	  var color = $(".link").css("color"); 
          if(color !== 'rgb(0,0,0)'){
          	 $(".link").css("color", "black");
          	 change = true;
          }
          $(".nav").css({"background-color" : "rgba(255,255,255,0.95)", "box-shadow": "0 2px 5px rgba(0,0,0,0.2)"});
       }
    });
});