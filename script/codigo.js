//tablero juego
var ancho = $("main").width();
var alto = $("main").height();

posicionInicialBola();

//eventos botones
$("#arriba").click(function () {
    moverBola(-30, 0);
});
$("#izquierda").click(function () {
    moverBola(0, -30);
});
$("#derecha").click(function () {
    moverBola(0, 30);
});
$("#abajo").click(function () {
    moverBola(30, 0);
});
$("#stop").click(function () {
    posicionInicialBola();
});  

function posicionInicialBola() {
    let posicionIniEjeX = ancho / 2 - 15;
    let posicionIniEjeY = alto / 2 - 15;
    $("#bola").css( "top", posicionIniEjeY + "px");
    $("#bola").css( "left", posicionIniEjeX + "px");
    $("#mensajes").text("Juan Alcocer");
}

function moverBola( movimientoY, movimientoX) {
    let posiciEjeY = parseInt($("#bola").css("top")) + movimientoY;
    let posiciEjeX = parseInt($("#bola").css("left")) +  movimientoX;
    if(posiciEjeY >= alto){
        $("#mensajes").text("Ha llegado al borde inferior");
    }else if(posiciEjeY < 0){
        $("#mensajes").text("Ha llegado al borde superior");
    }else if(posiciEjeX >= ancho){
        $("#mensajes").text("Ha llegado al borde derecho");
    }else if(posiciEjeX < 0){
        $("#mensajes").text("Ha llegado al borde izquierdo");
    }else{
        $("#bola").css( "top", posiciEjeY + "px" );
        $("#bola").css( "left", posiciEjeX + "px" );
        $("#mensajes").text("Juan Alcocer");
    }
    
}

    $(document).keypress(function(e) {
        switch (e.which) {
            case 119: {
                moverBola(-30, 0);
                break;
            }
            case 115: {
                moverBola(30, 0);
                break;
            }
            case 100: {
                moverBola(0, 30);
                break;
            }
            case 97: {
                moverBola(0, -30);
                break;
            }
        }                                           
    });         
               