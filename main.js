//alert('Hola mundo'); //Muestra la ventana emergente

var nombre ='Tania Belen'; //Declaración de variables hasta línea 5.
var apellidos = 'Gayosso Domínguez';
var edad = 24;

/*En JS, se usa console.log para imprimir los mensajes en la consola. Esto funciona para realizar depuraciones
y validar cómo devuelve los datos el programa.*/

console.log(nombre,apellidos)
console.log(nombre + ' ' + apellidos);
console.log('Mi edad es:' + edad);

//
var numero = 10; //Declaración de variable como número (number).
var otroNumero = '11'; //Declaración de variable como cadena de texto (string), usando comillas.

console.log(typeof(numero)); //Se usa typeof para mostrar en la consola el tipo de dato.
console.log(typeof(otroNumero));


// Se calcula el área de un triangulo
/*
var base = parseInt(prompt('Escriba la base del triangulo'));
var altura = parseInt(prompt ('Escriba la altura del triangulo'));
var resultado = ( base * altura ) / 2;

alert('El area del triangulo es: ' + resultado)
*/

/*Cuando usamos prompt, se muestra una caja de texto. Al insertar un dato no lo toma como número, sino como texto,
por ello, no se pueden realizar operaciones aritméticas. 
Al usar -parseInt- el dato ingresado será leído como número y así se realizará la operación, en este caso, 
obtener el área del triángulo. Señalar este cambio de texto a número es buena práctica*/
// Cuando se señaló el cambio, pero aún así se ingresa en el prompt un texto, se muestra NaN (Not a Number).
