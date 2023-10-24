// Codigo que le pida al usuario su edad y si es mayor de edad
// le pregnte su nombre y apellido y lo salude en el dom "hola x"
// si no le ponga en el DOM, "lo siento no eres mayor de edad"

let edad = prompt ("Escribe tu edad");

if (edad >= 18 && edad <= 100) {
    let nombre =  prompt ("Escribe tu nombre y apellido");
    document.write (nombre);
}else if (edad < 18 && edad > 0) {
    document.write ("Eres menor de edad");
}else if (edad <= 0 && edad > 100) {
    document.write ("Escribe una edad verdadera");
}