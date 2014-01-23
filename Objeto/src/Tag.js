//Agregar tag al contenedor de tags
function Tag(name, url, id) {
  
    $(id+' .tags').append(
            '<div class="tag"><img class="im" src="circulo.jpg" />&nbsp&nbsp' + name
                    + '</div>' + '<div class="tooltip"><div id="nom">' + name
                    + '</div><img id="im" src=' + url + ' /></div>');
}

//Funciones para mostrar tooltip y eliminar tooltip y objeto
$(function() {
    $('.im').click(function() {
        $(this).parent().next('.tooltip').remove();
        $(this).parent().remove();
    });
    $('.tag').tooltip({
        position : 'top center',
        relative : true
    });
});