$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
     $('.ryu-cool').hide();
  })
 .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    $('.ryu-cool').hide();
  }) 
   $(document).keydown(function(e) { 
      if ( e.which == 88 ){
  	     $('.ryu-still').hide();
	       $('.ryu-ready').hide();
          $('.ryu-cool').show();
    }
  })
  .mousedown(function() {
    playHadouken();    
    $('.ryu-still').hide();
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.ryu-cool').hide();
    $('.hadouken').finish().show()
    .animate(
      {'left': '800px'},
      1100,
      function() {
        $(this).hide();
        $(this).css('left', '440px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});
  


function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}








/*

 	var e = jQuery.Event( "keydown", { keyCode: 88 } );
   	( this ).trigger( e );


$(document).ready(function() {
  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
     $('.ryu-cool').hide();
  })
 .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
    $('.ryu-cool').hide();
  }) 
   $(document).keydown(function() {
  	$('.ryu-still').hide();
	$('.ryu-ready').hide();
    $('.ryu-cool').show();
  })
  .mousedown(function() {
    playHadouken();    
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.ryu-cool').hide();
    $('.hadouken').finish().show()
    .animate(
      {'right': '400px'},
      700,
      function() {
        $(this).hide();
        $(this).css('right', '440px');
      }
    );
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});
  

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

*/