let base = prompt('¿Que ingrediente base desea? (carne, pollo o veggie)');
let tipoDePan = prompt('¿Que tipo de pan desea (pan blanco, pan negro o pan sin gluten)');
let aderezos = prompt('¿Que aderezos desea agregar? (queso, lechuga, tomate, cebolla, mayonesa, mostaza)');
let mensajeSalida = "";
let total = 0;

if (base == 'carne') {
    total += 200;
}
else if  (base == 'pollo') {
    total += 150;
}
else if (base == 'veggie') {
    total += 100;
}

else {
    mensajeSalida += "El tipo de base seleccionado es invalido "
}

if ( tipoDePan == "pan blanco") {
    total += 50;
}
else if  (tipoDePan == "pan negro") {
    total += 60;
}
else if (tipoDePan == "pan sin gluten") {
    total += 75;
}

else {

}

if (aderezos.includes("queso")) {
    total += 20;
}

if (aderezos.includes("tomate")) {
    total += 15;
}

if (aderezos.includes("cebolla")) {
    total += 15;
}

if (aderezos.includes("lechuga")) {
    total += 10;
}

if (aderezos.includes("mayonesa")) {
    total += 5;
}

if (aderezos.includes("mostaza")) {
    total += 5;
}

mensajeSalida += "El total a pagar es de: $"+total;

let nodo = $("#salida");

nodo.text(mensajeSalida)