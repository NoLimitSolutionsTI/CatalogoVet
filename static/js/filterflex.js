$(function() {

    var cont = document.getElementsByClassName('container-filter');
/*     var headroom = new Headroom(header);
    headroom.init(); */


    //Menú Responsive
    // Calculamos el ancho e la página

    var ancho = $(window).width(),
        filter = $('.filter'),
        btnMenu = $('.btn-menu'),
        icono = $('.btn-menu .icono-menu');

    if (ancho < 720) {
        filter.hide(); // el hide sirve para esconder los elementos
        icono.addClass('fa-bars');
    }


    btnMenu.on('click', function(e) {
        filter.slideToggle(); //jQuery dispone de una función que nos permite mostrar u ocultar contenido con efecto slide con la lógica de que si el contenedor no está visible se muestra con slideDown y si está visible se oculta con slideUp. Se trata de la función slideToggle().
        icono.toggleClass('fa-bars'); //permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.
        icono.toggleClass('fa-times');

    });

    $(window).on('resize', function() {
        if ($(this).width() > 720) {
            filter.show();
            icono.addClass('fa-times');
            icono.removeClass('fa-bars');
        } else {
            filter.hide();
            icono.addClass('fa-bars');
            icono.removeClass('fa-times');
            
        }

    });
});
