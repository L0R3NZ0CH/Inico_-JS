// Codigo que le pida al usuario su edad y si es mayor de edad
// le pregnte su nombre y apellido y lo salude en el dom "hola x"
// si no le ponga en el DOM, "lo siento no eres mayor de edad"

// let edad = prompt ("Escribe tu edad");

// if (edad >= 18 && edad < 100) {
//     let nombre =  prompt ("Escribe tu nombre y apellido");
//     document.write (nombre);
// }else if (edad < 18 && edad > 0) {
//     document.write ("Eres menor de edad");
// }else if (edad <= 0 || edad > 100) {
//     document.write ("Escribe una edad verdadera");
// }
// Solicitar al usuario sus 3 calificaciones con un formulario de 3 input 
// y un boton de enviar y sacar el promedio dle usuairo, si es mayor a 8
// MOstrarle en el DOM, "felicidades lo lograste", si no, "sigue estudiando"
function calcularPromedio() {
    let calificacion1 = parseFloat(document.getElementById('calificacion1').value);
    let calificacion2 = parseFloat(document.getElementById('calificacion2').value);
    let calificacion3 = parseFloat(document.getElementById('calificacion3').value);
   
   const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
   
    if (promedio >= 8) {
      document.getElementById('resultado').innerText = '¡Felicidades! Has aprobado con un promedio de ' + promedio;
    } else {
      document.getElementById('resultado').innerText = 'Lo siento, no has aprobado. Tu promedio es ' + promedio;
    }
}
