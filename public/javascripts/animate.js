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

  $('#submitModal').on('show.bs.modal', function (event) {
    /*var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)*/
  })
});
