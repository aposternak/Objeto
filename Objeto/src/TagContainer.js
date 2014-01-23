function TagContainer(id) {
    this.id = '#'+id;
    this.array = []; 
    this.long = 0;  
    
    //Agregar contenedor de tags al block
    $(this.id)
            .append(
                    '<div class="title">Contenedor de Tags&nbsp</div><div class="icon" /><div class="tags" />');
    
}
//Métodos de objeto TagContainer, interfaz con objeto global
TagContainer.prototype = {
        addTag : function(name, url) {
            this.array[name] = new Tag(name, url, this.id);
            this.long++;
        },
        addTags : function(data)
        {
            for(var i=0;i<=(data.length-1);i++){
                this.addTag(data[i].tag,data[i].picture);
            }
        },
        removeTag : function(name) {
            var tag = this.array[name];
            tag.removeTag();
            delete this.array[name];
        },
        getTags : function() {
            return this.long;
        }
};