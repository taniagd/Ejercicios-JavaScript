//31 de mayo
/*Ejercicio 1. Crear un objeto que se llame persona. El ejemplo debe tener: nombre, apellido, edad.
Debe tener método para saludar y otro método donde diga su edad.
En consola se deben imprimir el resultado de ambos métodos*/

var person = { 
    name: "Tania", 
    lastName: "Gayosso",
    age: 24,
    greeting: function () {
        return (console.log ( '¡Hola' + ' ' + this.name + ' ' + this.lastName + '!' ));
    },
    edad : function () {
        return (console.log ( 'Su edad es:' + this.age));
    }
};

console.log(person.greeting()); // Los métodos se mandan a llamar como funciones. 
console.log(person.edad());

/*En la línea 6 de código se define e inicia la construcción del objeto, cuya estructura es: var 'nombre del objeto' = {}
    Los objetos contienen atributos, los cuales se separan por comas, y cada atributo contiene elementos. 
    
    En línea 7 se designa el atributo name, seguido de dos puntos y el elemento entrecomillado.

    En la línea 12, se forma un método, los métodos pueden contener funciones. Cada vez que llamemos el método dentro del objeto, se ejecutará la función. 

    En el método greeting y edad se usa la palabra 'this' para llamar al atributo dentro del objeto. Por ejemplo: 
    this.name llama al atributo 'name', que contiene "Tania". Es necesario usar 'this' dentro de un método.

    Se usa console log para imprimior el resultado de cada método que contine una función en la consola.

    En la línea 16 se cierra la construcción del objeto.

    *El objeto no se ejecuta hasta que lo mandes a llamar. Para llamar cada parte del objeto, se utiliza la notación 'objeto.atributo'.
    En la línea 18 se manda a llamar el método 'greeting' dentro del objeto 'person', que ejecutará la función dentro de él.
    Para llamar un método y ejecute la función dentro del atributo debemos escribir objeto.método(), este caso 'person.greeting()'. */ 

/*Ejercicio 2. Hacer una función donde le pasemos los parámetros (nombre, apellidos, edad). 
Esta función tendrá dentro un objeto.
Los datos que reciba la función llenarán el objeto.
La función debe retornar el objeto*/

function parametrosObjeto (a,b,c) {
    var person = {
        name: a,
        lastName: b,
        age: c,
    }
    return person;
}

console.log (parametrosObjeto ("Frida","Guzmán", 25));
