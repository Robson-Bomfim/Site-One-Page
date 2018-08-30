
	// Faz animação para subir
$(".fa-chevron-up").click(function(event) {

    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, 700);

});


/* SCRIPT JQUERY PARA SROLL DA NAVBAR */
$("nav a").click(function(event){
	event.preventDefault();
	let id = $(this).attr("href");
	targetOffset = $(id).offset().top;
	//menuHeight = $("nav").innerHeight();
	$("html, body").animate({
		scrollTop: targetOffset - 80
	}, 700);
});


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
if ($(this).scrollBottom()) {

        $(".fa-chevron-up").addClass( "fixed-bottom" );

    } else {
        
        $(".fa-chevron-up").removeClass( "fixed-bottom" );
    }


        
(function($){

	"use strict";
	/* Inicializar nosso contador*/
	$('.contar').counterUp({
		time: 1000,
		delay: 10
	});

})(jQuery);