
// Arrays
// 1.- Crea una variable de nombre 'arrayVacio' cuyo valor sea un array vacio
const arrayVacio = []
// 2.- Crea una variable de nombre 'arrayNumeros' cuyo valor sea el array de numeros del 0 al 9 incluidos (0, 1, 2...)
const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// 3.- Crea una variable de nombre 'arrayNumerosPares' cuyo valor sea el array de numeros pares del 0 al 9 (considerando al 0 par)
const arrayNumerosPares = [0, 2, 4, 6, 8]
// 4.- Crea una variable de nombre 'arrayBidimensional' cuyo valor sea el siguiente array [[0, 1, 2], ['a', 'b', 'c']]
const arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]
// Funciones
// 5.- Crea la función 'suma' que acepte como argumentos dos números y devuelva como resultado su suma
//     suma(109, 101)
//     suma(117, 134)
//     suma(91, 120)
//     suma(69, 134)
//     suma(63, 120)
function suma(num1, num2) {
	return num1 + num2
}
// 6.- Crea la función 'potenciacion' que acepte como argumentos dos números y devuelva como resultado el primer número (a) elevado al segundo(b) a^b [Prohibido operador ** y math.exp]
//     potenciacion(16, 2)
//     potenciacion(35, 8)
//     potenciacion(21, 2)
//     potenciacion(38, 0)
//     potenciacion(12, 6)
function potenciacion(a, b) {
	return Math.pow(a, b)
}
// 7.- Crea la función 'separarPalabras' que acepte como argumento un string y devuelva un array de palabras
//     Hola que tal?
//     The Bridge for life
//     A ver como separas esto
const palabras = []
function separarPalabras(string) {
	return string.split(' ')
}
// 8.- Crea la función 'repetirString' que acepta como argumento un string y un número, y retorna el primer string concatenado el número dado de veces
//     convertir ja en jajajajajajajaja
//     escribir estoy castigado 10 veces
function repetirString(string, numero) {
	if (numero <= 0) {
		return ''
	} else {
		return string.repeat(numero);
	}
}

// 9.- Crea la función 'esPrimo' que acepte como argumento un número y devuelva true si es primo y false si no lo es
//     El número 911 es primo
//     El número 1777 es primo
//     El número 247 no es primo
//     El número 1197 no es primo
function esPrimo(numero) {
	if (numero <= 1) {
		return false
	}
// Mezclando Arrays y Funciones
// 10.- Crea la función 'ordenarArray' que acepte como argumento un array de números y devuelva un array ordenado de menor a mayor
//     Ordenar [135, 104, 112]
//     Ordenar [80, 84, 96, 94]
//     Ordenar [48, 159, 76, 47, 77, 127, 177, 27, 136]
//     Ordenar []
//     Ordenar []
for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
        return false;
    }
}
return true;
}

// 11.- Crea la función 'obtenerPares' que acepte como argumento un array de números y devuelva un array con los elementos que sean pares
//     Pares en [5, 86, 78, 2]
//     Pares en [10, 23, 122, 47, 32, 0, 138, 23, 115]
//     Pares en [46, 55, 32]
//     Pares en [20, 4, 16, 27, 19]
//     Pares en [30, 17, 5, 23, 21, 21, 1]
function ordenarArray(numeros) {
	return numeros.sort((a, b) => a - b)
}

const numPar = [2, 5, 10, 24, 11]

function obtenerPares(numPar) {
	return numPar.filter(numero => numero % 2 === 0)
}

// 12.- Crea la función 'pintarArray' que acepte como argumento un array y devuelva una cadena de texto Array: [0, 1, 2] String: '[0, 1, 2]'
//     Pintar array [12, 67, 9, 80, 35, 52]
//     Pintar array [54, 28, 44, 15, 0, 49, 17]
//     Pintar array [110, 44, 45, 54, 156, 70, 105]
//     Pintar array [30, 14, 112, 41]
//     Pintar array [26, 0, 51, 3, 63]
function pintarArray(arrai) {
	return `'[${arrai.join(', ')}]'`
}
// 13.- Crea la función 'arrayMapi' que acepte como argumento un array y una función y retorne un array en el que se haya aplicado la función a cada elemento del primer array
//     Array [8, 51, 13]
//     Array [0, 21, 16, 5, 5, 6]
//     Array [116, 8, 19, 114, 55]
//     Array [13, 56, 53, 47, 88, 0]
function arrayMapi(arreglo, funcion) {
	const mapeado = []

	for (let i = 0; i < arreglo.length; i++) {
		mapeado.push(funcion(arreglo[i], i))
	}
	return mapeado;
}
// 14.-Crea la función 'eliminarDuplicados' que acepte como argumento un array y deberá devolver un array en el que se hayan eliminado los duplicados
//     Eliminar duplicados de [24, 107, 126, 137, 107, 24, 92, 126, 137, 107, 24, 92, 126, 137, 92]
//     Eliminar duplicados de [11, 73, 115, 114, 12, 6, 101, 11, 56, 73, 115, 114, 12, 6, 101, 11, 56, 73, 115, 114, 12, 6, 101, 56]
//     Eliminar duplicados de [32, 111, 56, 16, 32, 111, 56, 16, 32, 111, 56, 16]
//     Eliminar duplicados de [36, 31, 35, 1, 29, 31, 36, 31, 35, 25, 1, 29, 31, 36, 31, 35, 25, 1, 25, 29, 31]
//     // Eliminar duplicados de [56, 57, 89, 131, 57, 19, 89, 19, 131, 57, 56, 56, 19, 131, 89]
// // Pair Programming 
function duplicar(elemento) {
	return elemento * 2;
}

function eliminarDuplicados(arr) {
	return arr.filter((element, index) => arr.indexOf(element) === index)
}

	



//Proyecto personal
// 15.- Crear variable de nombre arrayNumerosNeg declarada con un array de números del 0 al -9 (0, -1, -2...)
let arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
// 16.- Crear variable de nombre holaMundo declarada con valor array con las palabras 'Hola' y 'Mundo'
let holaMundo =['Hola','Mundo']
// 17.- Crear variable de nombre loGuardoTodo declarada con valor array con valores 'hola', 'que', 23, 42.33 y 'tal'
let loGuardoTodo =['hola', 'que', 23, 42.33, 'tal']
// 18.- Crear variable de nombre arrayDeArrays declarada con valor array: [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
// Funciones

// 19.- Crea la función multiplicacion que acepte como argumento dos números y devuelva el resultado de su multiplicación
let num1, num2
function multiplicacion(num1,num2){
    return num1*num2
}

// 20.- Crea la función division que acepte como argumento dos números y devuelva el resultado de su division
function division(num1,num2){
    return num1/num2
}

// 21.- Crea la función esPar que acepte como argumento un número y devuelva true si es par y false si es impar
function esPar(num3){
    if(num3 %2===0){
        return true
    }
    return false
}
// 22.- Crea el array arrayFunciones que tenga como valor las funciones: suma, resta y multiplicación (todas aceptan 2 números como argumento y devuelve el resultado de su operación)
function suma(num1,num2){
    return num1+num2
}
function resta(num1,num2){
    return num1-num2
}
var arrayFunciones = [suma, resta, multiplicacion];

// Mezclando arrays y funciones

// 23.- Crear la función ordenarArray2 que acepta como argumento un array de números y devuelva un array ordenado de mayor a menor
let arrayordenar = [2, 3, 4, 5, 6, 10, 7];
let largo = arrayordenar.length;

function ordenarArray2(arrayordenar) {
    for (var j = 0; j < largo - 1; j++) {
        if (arrayordenar[j] > arrayordenar[j + 1]) {
            var temp = arrayordenar[j];
            arrayordenar[j] = arrayordenar[j + 1];
            arrayordenar[j + 1] = temp;
        }
    }
    return arrayordenar;
}
// 24.- Crear la función obtenerImpares que acepta como argumento un array de números y devuelva un array con los elementos impares
let paroimpar=[1,2,3,4,5,6]
function obtenerImpares(paroimpar){
    return paroimpar.filter(num => num % 2 !== 0);
}
  

// 25.- Crear la función sumarArray que acepte como argumento un array numérico y devuelva la suma de los números en el array Array: [1, 2, 3] resultado: 6
let arraysuma = [];
function sumarArray(arraysuma) {
    return arraysuma.reduce((total, numero) => total + numero, 0);
}
// 26.- Crear la función multiplicarArray que acepte como argumento un array numérico y devuelva la multiplicación de los números en el array Array: [2, 3, 4] resultado: 24
let multiplicar =[]
function multiplicarArray(multiplicar) {
    return multiplicar.reduce((total2, numero2) => total2 * numero2, 1);
}