//tablero juego
var ancho = $("main").width();
var alto = $("main").height();

posicionInicialBola();
console.log( $("#bola").position());

var y = parseInt($("#bola").css("top"));
var x = parseInt($("#bola").css("left"));

console.log(y + "-" + x);
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
    y = posicionIniEjeY;
    x = posicionIniEjeX;
}

function moverBola( movimientoY, movimientoX) {
    let posiciEjeY = y + movimientoY;
    let posiciEjeX = x +  movimientoX;
    if(posiciEjeY >= alto){
        $("#mensajes").text("Ha llegado al borde inferior");
    }else if(posiciEjeY < 0){
        $("#mensajes").text("Ha llegado al borde superior");
    }else if(posiciEjeX >= ancho){
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
    console.log(y + "-" + x);
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
               