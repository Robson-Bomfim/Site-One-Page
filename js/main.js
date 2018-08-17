
 /* SCRIPT JQUERY PARA TROCAR DE COR NAVBAR */
$(document).scroll(function () {

    if ($(this).scrollTop() > 80) {

        $('.navbar').css("background-color", "#68627a");
        $('.navbar').css("transition", "all .60s ease-in-out");
        $(".navbar").addClass( "bg-topo" );
        $(".fa-chevron-up").addClass( "fixed-bottom" );

    } else {
        $('.navbar').css("background-color", "transparent");
        $(".fa-chevron-up").removeClass( "fixed-bottom" );
    }

});

// Faz animação para aparecer e sumir
if ($(this).scrollTop() > 80) {

        $(".fa-chevron-up").addClass( "fixed-bottom" );

    } else {
        
        $(".fa-chevron-up").removeClass( "fixed-bottom" );
    }

        
// Faz animação para subir
$(".fa-chevron-up").click(function(event) {

    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, 500);

});


        
(function($){

	"use strict";
	/* Inicializar nosso contador*/
	$('.contar').counterUp({
		time: 1000,
		delay: 10
	});

})(jQuery);