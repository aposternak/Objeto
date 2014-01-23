//JSONs de datos
var dato = {
    id : 'obj1',
    image : 'pic.png',
    title : 'Proyecto de Ariel',
    description : 'Objeto de Contenedores',
    stars : {
        on : 2,
        editable : true,
        amount : '$2000.00',
        description : 'Edificio A',
        date : '1/1/2001'
    },
    name : {
        image : 'isaac.jpg',
        name : 'Posternak, Ariel',
        post : 'Programador TI'
    },
    tags : [ {
        tag : 'Ariel',
        picture : 'f1.png'
    }, {
        tag : 'Abraham',
        picture : 'f2.png'
    }, {
        tag : 'Saul',
        picture : 'f3.png'
    }, {
        tag : 'Carlos',
        picture : 'f4.png'
    } ]
};

var dato2 = {
    id : 'obj2',
    image : 'pic2.jpg',
    title : 'Proyecto de Ariel 2',
    description : 'Objeto de Contenedores',
    stars : {
        on : 3,
        editable : true,
        amount : '$1000.00',
        description : 'Edificio B',
        date : '2/2/2002'
    },
    name : {
        image : 'ariel.jpg',
        name : 'Posternak, Alex',
        post : 'Programador IT'
    },
    tags : [ {
        tag : 'Juan',
        picture : 'a1.png'
    }, {
        tag : 'Simon',
        picture : 'a2.png'
    }, {
        tag : 'Pepe',
        picture : 'a3.png'
    }, {
        tag : 'Jaime',
        picture : 'a4.png'
    } ]
};
//Constructor de block compuesto de constructores de cada contenedor
function Block(datos) {

    this.picture = new Picture(datos.id, datos.image);

    this.title = new Title(datos.id, datos.title, datos.description);

    this.starRater = new StarRater(datos.id, datos.stars.on,
            datos.stars.editable, datos.stars.amount, datos.stars.description,
            datos.stars.date);

    this.name = new Name(datos.id, datos.name.image, datos.name.name,
            datos.name.post);

    this.tagContainer = new TagContainer(datos.id);

    this.addTags(datos.tags);

    return this;
}
//Métodos de Block ligados a métodos de objetos individuales
Block.prototype = {

    getImage : function() {
        return this.picture.getURL();
    },
    setImage : function(val) {
        this.picture.setURL(val);
    },
    getTitle : function() {
        return this.title.getTitle();
    },
    setTitle : function(val) {
        this.title.setTitle(val);
    },
    getImage : function() {
        return this.picture.getURL();
    },
    setImage : function(val) {
        this.picture.setURL(val);
    },
    getDescription : function() {
        return this.title.getDescription();
    },
    setDescription : function(val) {
        this.title.setDescription(val);
    },
    getEnable : function() {
        return this.starRater.getEnable();
    },
    setEnable : function(val) {
        this.starRater.setEnable(val);
    },
    getAmount : function() {
        return this.starRater.getAmount();
    },
    setAmount : function(val) {
        this.starRater.setAmount(val);
    },
    getConcept : function() {
        return this.starRater.getConcept();
    },
    setConcept : function(val) {
        this.starRater.setConcept(val);
    },
    getDate : function() {
        return this.starRater.getDate();
    },
    setDate : function(val) {
        this.starRater.setDate(val);
    },
    getPicture : function() {
        return this.name.getURL();
    },
    setPicture : function(val) {
        this.name.setURL(val);
    },
    getName : function() {
        return this.name.getName();
    },
    setName : function(val) {
        this.name.setName(val);
    },
    getPosition : function() {
        return this.name.getPosition();
    },
    setPosition : function(val) {
        this.name.setPosition(val);
    },
    addTags : function(tags) {
        this.tagContainer.addTags(tags);
    },
    getTags : function() {
        return this.tagContainer.getTags();
    }
};
//Construccion de objetos
$(function() {
    block1 = new Block(dato);
    block2 = new Block(dato2);
    
    //Esconder el contenedor anexo a la fecha y alternar las direcciones de la flecha
    var flag = true;
    $('.icon').click(function() {
        var $this = $(this);
        $this.next().toggle(500, function() {
            if (flag) {
                $this.removeClass('bg1').addClass('bg2');
                flag = false;
            } else {
                $this.removeClass('bg2').addClass('bg1');
                flag = true;
            }
        });
    });
});