/*Ejercicio 1: Operaciones aritméticas 
Ejecutar un programa donde el usuario ingrese dos números y éstos sean sumados, restados, multiplicados y divididos.
Los resultados deben reflejarse en la consola. */


var numero = parseInt (prompt('Escriba el primer número')); //Se introducen los datos. Se usó parseInt para especificar que este dato debe ser un número.
var otroNumero = parseInt (prompt ('Escriba el segundo número')); 


var suma = (numero + otroNumero); // Este es el resultado de la suma de los datos.
//alert ('El resultado de la suma es: '+ suma); //Para mostrar en una ventana el resultado.

var resta = (numero - otroNumero); // El resultado de la resta.
var multiplicacion = (numero * otroNumero); // El resultado de la multiplicación.
var division = (numero / otroNumero); // El resultado de la división.

console.log(numero); // Se imprimirán en la consola los dos números ingresados.
console.log(otroNumero); 

console.log('El resultado de la suma es:' + suma); // Se imprimirán en la consola los resultados de las operaciones.
console.log('El resultado de la resta es:' + resta);
console.log('El resultado de la multiplicacion es:' + multiplicacion);
console.log('El resultado de la división es: ' + division);


/*Ejercicio 2: Condicionales.
Hacer un programa donde se le pregunte la edad al usuario. 
Si el usuario tiene 18 años o más y menos de 29 años, que se le imprima por consola que ha sido aceptado en el progarama de Generation. 
En caso de no ser así, mostrar un mensaje indicando que no cumple con los requisitos del programa*/

var edad = parseInt (prompt("Escriba su edad")); // Se declara la variable 'edad' y se añade parseInt para especificar que el dato ingresado debe ser un número

//Inicio del condicional.
if(edad >= 18 && edad <29){ //Se coloca mayor o igual que 18 pero menor de 29. 
    alert ('¡Felicidades! Has sido aceptado en el programa de Generation'); // Para que el mensaje se muestre al usuario.
    console.log('¡Felicidades! Has sido aceptado en el programa de Generation');//Esto pasará en la consola de la página, si se cumple la condición.
}else{ //Se coloca como el caso contrario de la condición.
    alert ('Lo sentimos, no cumples con los requisitos para ser parte de Generation'); // Para que el mensaje se muestre al usuario.
    console.log('Lo sentimos, no cumples con los requisitos para ser parte de Generation'); //Esto pasará en la consola de la página, si no se cumple la condición establecida previamente.
}

/*Ejercicio 3: Nómina. 
Calcular el salario bruto y neto (quincenal y mensual) de una persona.
El salario diario debe ser ingresado por el usuario a través de prompt.
Los descuentos para calcular el sueldo neto serán: sueldo bruto - ISR(30%)  - IMSS(10%)*/

var salarioDiario = parseInt (prompt ('Ingrese su salario diario')); // El usuario ingresará el dato.

// Variables de días que componen una quincena y un mes.
var diasLaboradosQ = 15;
var diasLaboradosM = 30;

// Salario Bruto
// Se calcula el salario bruto quincenal y mensual multiplicando el salario diario por días laborados.
var salarioBrutoQ = (salarioDiario * diasLaboradosQ);
var salarioBrutoM = (salarioDiario * diasLaboradosM);

alert (' Su salario bruto quincenal es de: ' + salarioBrutoQ); // Muestra ventana con el resultado.
alert  (' Su salario bruto mensual es de: ' + salarioBrutoM);
console.log (' Su salario bruto quincenal es de: ' + salarioBrutoQ); // Se imprime en la consola el salario quincenal y mensual
console.log (' Su salario bruto mensual es de: ' + salarioBrutoM);

// Cálculo de impuestos quer deben descontarse del salario quincenal y mensual
var isrQ = (salarioBrutoQ * 0.30); // Se multiplica el salario quincenal por el 30%, es decir, 0.30 que corresponde al ISR.
var isrM = (salarioBrutoM * 0.30);

var imssQ = (salarioBrutoQ * 0.10); // Se multiplica el salario quincenal por el 10%, es decir, 0.10 que corresponde al IMSS.
var imssM = (salarioBrutoM * 0.10); 

// Descuento de impuestos ISR e IMSS quincenal y mensual 
var descuentosQ = (isrQ + imssQ); // Se suman los impuestos quincenales isr e imss
var salarioNetoQ = (salarioBrutoQ - descuentosQ); // Al salario bruto se le descuenta la suma de los impuestos isr e imss.
alert (' Su salario neto quincenal es de: ' + salarioNetoQ);  
console.log (' Su salario neto quincenal es de: ' + salarioNetoQ); // Se imprime en la consola el salario neto quincenal.

var descuentosM = (isrM + imssM); // Se suman los impuestos mensuales de isr e imss.
var salarioNetoM = (salarioBrutoM - descuentosM); // Al salario mensual se le descuenta la suma de los impuestos isr e imss.
alert (' Su salario neto mensual es de: ' + salarioNetoM); 
console.log (' Su salario neto mensual de ' + salarioNetoM); // Se imprime en la consola el salario neto mensual.
