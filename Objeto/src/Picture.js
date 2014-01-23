function Picture(id, url) {
    
    this.url = url;
  //Agregar contenedor de imagen al block
    $('#'+id).append(
            '<div class="title" id="t1">Foto&nbsp</div><div class="icon" id="i1" /><div class="pic" style="background-image: url('+this.url+')"/>');
}
//Métodos de objeto Picture, interfaz con objeto global
Picture.prototype = {
        getURL: function() {
            return this.url;
        },
        setURL : function(url) {
            this.url = url;
        }       
};