//28 de mayo
/*1.Crear una función que reciba, por parámetros, 2 números y los sume. Imprimir en la consola 5 diferentes sumas.
Nosotros definiremos los datos, no es necesario usar prompt. */

function suma (num1, num2) {
    return num1+num2;
}
console.log (suma (74,65));
console.log (suma (23,19));
console.log (suma (82,7));
console.log (suma (45,4));
console.log (suma (146, 876)); 


// 2. Crear un arreglo de meses y por console.log imprimir los meses.

var meses = [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
console.log( 'Los meses del año son: ' + meses);


//3. Crear un ciclo efor en donde se imprima el arreglo de meses.

for (var i = 0; i< meses.length; i++) { 
    console.log(meses [i]);
}