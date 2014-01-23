function StarRater(id, num, enable, amount, concept, date) {
    
    id = '#'+id;
    this.num = num;
    this.enable = enable;
    this.amount = amount;
    this.concept = concept;
    this.date = date;
  //Agregar calificador de estrellas al block
    $(id)
            .append(
                    '<div class="title">Calificador de Estrellas&nbsp</div><div class="icon" /><div class="stars"><div id="amount">'
                            + this.amount
                            + '</div><div class="blanc" />'
                            + '<div class="star0" /><div class="star1" /><div class="star2" /><div class="star3" /><div class="star4" /><br><div id="concept">'
                            + this.concept
                            + '</div>'
                            + '<div id="date">'
                            + this.date + '</div></div>');

    // Colorear Estrellas por Parametro
    for (var i = 0; i <= num-1; i++) {
        $(id).find(".star"+i).removeClass('blank').addClass('full');
    }
    // Colorear Estrellas por Mouse, si esta habilitado
    if (this.enable) {
        $(id+' .blanc').click(function() {            
            for (var i = 0; i <= 4; i++) {
                $(id+' .star'+i).removeClass('full').addClass('blank');
            }
        });
        $(id+' .star0').click(function() {
            $(id+' .star0').removeClass('blank').addClass('full');
            for (var i = 1; i <= 4; i++) {
                $(id+' .star'+i).removeClass('full').addClass('blank');
            }
        });
        $(id+' .star1').click(function() {
            $(id+' .star1').removeClass('blank').addClass('full');
            $(id+' .star0').removeClass('blank').addClass('full');
            for (var i = 2; i <= 4; i++) {
                $(id+" .star"+i).removeClass('full').addClass('blank');
            }
        });
        $(id+' .star2').click(function() {
            $(id+' .star2').removeClass('blank').addClass('full');
            $(id+' .star1').removeClass('blank').addClass('full');
            $(id+' .star0').removeClass('blank').addClass('full');
            for (var i = 3; i <= 4; i++) {
                $(id+' .star'+i).removeClass('full').addClass('blank');
            }
        });
        $(id+' .star3').click(function() {
            $(id+' .star4').removeClass('full').addClass('blank');
            $(id+' .star3').removeClass('blank').addClass('full');
            $(id+' .star2').removeClass('blank').addClass('full');
            $(id+' .star1').removeClass('blank').addClass('full');
            $(id+' .star0').removeClass('blank').addClass('full');
        });
        $(id+' .star4').click(function() {
            for (var i = 0; i <= 4; i++) {
                $(id+' .star'+i).removeClass('blank').addClass('full');
            }
        });
    }
}
//Métodos de objeto StarRater, interfaz con objeto global
StarRater.prototype = {
        
        getEnable: function() {
            return this.enable;
        },
        setEnable: function(val) {
            this.enable = val;
        },
        getAmount: function() {
            return this.amount;
        },
        setAmount: function(val) {
            this.amount = val;
        },
        getConcept: function() {
            return this.concept;
        },
        setConcept: function(val) {
            this.concept = val;
        },
        getDate: function() {
            return this.date;
        },
        setDate: function(val) {
            this.date = val;
        }
};