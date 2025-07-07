//Pide al usuario su nombre.
//🔹 Pide su año de nacimiento.
let anodenacimiento = prompt("¿Cuál es tu año de nacimiento?");
//🔹 Guarda el año actual (por ejemplo, 2025).
let añoactual = 2025;
//🔹 Calcula su edad restando año actual menos año de nacimiento.
let edad = añoactual - Number(anodenacimiento);
//🔹 Determina si es mayor de edad (18 años o más).
let mayordeedad = MayoriaDeEdad(edad);
//🔹 Crea un mensaje que diga su nombre
let nombre = prompt("¿Cuál es tu nombre?");
//  su edad y si es mayor de edad o no.
function MayoriaDeEdad ( mayordeedad) {
        if (mayordeedad >= 18) {
        return true;
        }else {
        return false;
    }   
 }
//🔹 Muestra ese mensaje con console.log y con document.write.
console.log(`Hola ${nombre}, tienes ${edad} años y eres ${mayordeedad ? "mayor de edad" : "menor de edad"}.`);
document.write(`Hola ${nombre}, tienes ${edad} años y eres ${mayordeedad ? "mayor de edad" : "menor de edad"}.`); 


