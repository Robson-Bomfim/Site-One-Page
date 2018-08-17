
 /* SCRIPT JQUERY PARA TROCAR DE COR NAVBAR */
$(document).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar').css("background-color", "#68627a");
        $('.navbar').css("transition", "all .60s ease-in-out");
        $( ".navbar" ).addClass( "bg-topo" );
    } else {
        $('.navbar').css("background-color", "transparent")
    }
});
        
(function($){

	"use strict";
	/* Inicializar nosso contador*/
	$('.contar').counterUp({
		time: 1000,
		delay: 10
	});

})(jQuery);