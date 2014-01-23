function Name(id, url, name, position) {
    
    this.url = url;
    this.name = name;
    this.position = position;
    //Agregar contenedor de nombre y posición al block
    $('#'+id)
            .append(
                    '<div class="title">Nombre & Puesto&nbsp</div><div class="icon" /><div class="name"><div id="url" style="background-image: url('
                            + this.url
                            + ')"></div><div id="text">'
                            + this.name
                            + '<br>' + this.position + '</div></div>');
}
//Métodos de objeto Name, interfaz con objeto global
Name.prototype = {
        getURL: function() {
            return this.url;
        },
        setURL: function(val) {
            this.url = val;
        },
        getName: function() {
            return this.name;
        },
        setName: function(val) {
            this.name = val;
        },
        getPosition: function() {
            return this.position;
        },
        setPosition: function(val) {
            this.position = val;
        },
};