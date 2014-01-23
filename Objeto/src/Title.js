function Title(id, tit, desc) {
    
    this.tit = tit;
    this.desc = desc;
    
//Agregar contenedor de titulo al block
    $('#'+id).append(
            '<div class="title">Título&nbsp</div><div class="icon" /><div class="tit"><h1>'+this.tit+'</h1><h2 class="h2">'+this.desc+'</h2>');
}
//Métodos de objeto Title, interfaz con objeto global
Title.prototype = {
        getTitle : function() {
            return this.tit;
        },
        setTitle : function(url) {
            this.tit = tit;
        },
        getDescription : function() {
            return this.desc;
        },
        setDescription : function(desc) {
            this.desc = desc;
        },
};