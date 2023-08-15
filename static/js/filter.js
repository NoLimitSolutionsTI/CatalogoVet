$(document).ready(function () {

    // AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
    $('.filter .filter-item[category="all"]').addClass('filter-active')

    // FILTRANDO PRODUCTOS
    $('.filter-item').click(function(){
        var catItem = $(this).attr('category'); // contenemos el valor del atributo category
/*         console.log(catItem) */ // para asegurarnos que lo esta llamando

        //AGREGANDO CLASE ACTIVE AL ENLACE QUE SELECCIONEMOS
        $('.filter .filter-item').removeClass('filter-active');
        $(this).addClass('filter-active')

        // OCULTANDO PRODUCTOS
        $('.item').css('opacity', '0')
         function hideItem(){
            $('.item').hide();
        } setTimeout(hideItem,400)

        //MOSTRANDO PRODUCTOS
        function showItem(){
            $('.item[category='+catItem+']').css('opacity','1')
            $('.item[category='+catItem+']').show(); 
        }setTimeout(showItem,400)
    })

    //MOSTRANDO TODOS LOS PRODUCTOS
    $('.filter-item[category="all"]').click(function(){
        function showAllItem() {
        $('.item').show();
        $('.item').css('opacity','1');
        }setTimeout(showAllItem,400)
    })
});