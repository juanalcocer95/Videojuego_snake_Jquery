//tablero juego
var ancho = $("main").width();
var alto = $("main").height();

posicionInicialBola();
console.log( $("#bola").position());

var $movimiento = 30;

var y = parseInt($("#bola").css("top"));
var x = parseInt($("#bola").css("left"));

//eventos botones
$("#arriba").click(function () {
    moverBola(-$movimiento, 0);
    $("img").css("transform", "rotate(180deg)");
});
$("#izquierda").click(function () {
    moverBola(0, -$movimiento);
    $("img").css("transform", "rotate(90deg)");
});
$("#derecha").click(function () {
    moverBola(0, $movimiento);
    $("img").css("transform", "rotate(270deg)");
});
$("#abajo").click(function () {
    moverBola($movimiento, 0);
    $("img").css("transform", "rotate(0deg)");
});
$("#stop").click(function () {
    posicionInicialBola();
    $("img").css("transform", "rotate(0deg)");
});  

function posicionInicialBola() {
    let posicionIniEjeX = ancho / 2 - 15;
    let posicionIniEjeY = alto / 2 - 15;
    $("#bola").css( "top", posicionIniEjeY + "px");
    $("#bola").css( "left", posicionIniEjeX + "px");
    $("#mensajes").text("Juan Alcocer");
    y = posicionIniEjeY;
    x = posicionIniEjeX;
}

function moverBola( movimientoY, movimientoX) {
    let posiciEjeY = y + movimientoY;
    let posiciEjeX = x +  movimientoX;
    if(posiciEjeY >= alto - $movimiento){
        $("#mensajes").text("Ha llegado al borde inferior");
    }else if(posiciEjeY < 0){
        $("#mensajes").text("Ha llegado al borde superior");
    }else if(posiciEjeX >= ancho - $movimiento){
        $("#mensajes").text("Ha llegado al borde derecho");
    }else if(posiciEjeX < 0){
        $("#mensajes").text("Ha llegado al borde izquierdo");
    }else{
        y = y + movimientoY;
        x = x + movimientoX;
        $("#bola").css( "top", y + "px" );
        $("#bola").css( "left", x + "px" );
        $("#mensajes").text("Juan Alcocer");    
    }
}

    $(document).keypress(function(e) {
        switch (e.which) {
            case 119: {
                moverBola(-$movimiento, 0);
                $("img").css("transform", "rotate(180deg)");
                break;
            }
            case 115: {
                moverBola($movimiento, 0);
                $("img").css("transform", "rotate(0deg)");
                break;
            }
            case 100: {
                moverBola(0, $movimiento);
                $("img").css("transform", "rotate(270deg)");
                break;
            }
            case 97: {
                moverBola(0, -$movimiento);
                $("img").css("transform", "rotate(90deg)");
                break;
            }
        }                                           
    });         
               