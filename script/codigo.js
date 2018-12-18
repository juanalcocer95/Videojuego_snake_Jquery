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
    $("#bola").css( "top", posicionIniEjeY + "px" );
    $("#bola").css( "left", posicionIniEjeX + "px" );
}

function moverBola( movimientoY, movimientoX) {
    let posiciEjeY = parseInt($("#bola").css("top")) + movimientoY;
    let posiciEjeX = parseInt($("#bola").css("left")) +  movimientoX;
    $("#bola").css( "top", posiciEjeY + "px" );
    $("#bola").css( "left", posiciEjeX + "px" );
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
               