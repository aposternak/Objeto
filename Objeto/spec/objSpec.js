describe("contenido", function () { 
    
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
    
    var objeto1 = new Block(dato);
    var objeto2 = new Block(dato2);
    
    var Oprueba = objeto2;
    
    var Dprueba = dato2;
    
    //Revisa si contenedores estan vacios
    it("coincide datos", function () {
        expect(Oprueba.getImage()).toBe(Dprueba.image);
     });
    it("coincide datos", function () {
        expect(Oprueba.getTitle()).toBe(Dprueba.title);
     });
    it("coincide datos", function () {
        expect(Oprueba.getDescription()).toBe(Dprueba.description);
     });
    it("coincide datos", function () {
        expect(Oprueba.getEnable()).toBe(Dprueba.stars.editable);
     });
    it("coincide datos", function () {
        expect(Oprueba.getAmount()).toBe(Dprueba.stars.amount);
     });
    it("coincide datos", function () {
        expect(Oprueba.getConcept()).toBe(Dprueba.stars.description);
     });
    it("coincide datos", function () {
        expect(Oprueba.getDate()).toBe(Dprueba.stars.date);
     });
    it("coincide datos", function () {
        expect(Oprueba.getPicture()).toBe(Dprueba.name.image);
     });
    it("coincide datos", function () {
        expect(Oprueba.getName()).toBe(Dprueba.name.name);
     });
    it("coincide datos", function () {
        expect(Oprueba.getPosition()).toBe(Dprueba.name.post);
     });
    it("coincide datos", function () {
        expect(Oprueba.getTags()).toBe(Dprueba.tags.length);
     });
});