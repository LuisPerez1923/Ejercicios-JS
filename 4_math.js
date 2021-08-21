//Objeto Math en JS
//buscar como funciona el objeto Math en js y realizar 3 ejemplo de uso

/*****Math******/
/*El objeto Math le permite realizar matematicas*/

/*******EJEMPLO1********/
//var x = Math.PI;
//console.log(x);
/*******EJEMPLO2********/
//var num = Math.pow(5,2);
//console.log(num);

/*******EJEMPLO3********/
//var conDecimales=28.9759;
//var sinDecimales = Math.trunc(conDecimales);
//console.log(sinDecimales);

/*Orden de las operaciones
escribe el siguiente codigo observa el resultado, analizalo y explica el por que de ese resultado*/

/******Primer Operacion******/
//let resultado = 5 + 10 * 2 - 1 + 8 / 4;
/*5+ (20) - 1 + (2) --con la jerarquia de operaciones
primero resolvi la multiplicacion y division
5+20-1+2 -- ahora se resolvera la suma y resta 
25-1+2
24+2 es igual a 26 */

//console.log(resultado);

/********Segunda Operacion********/
//let resultado = (5 + 10) * (2 - 1) + 8 / 4;
/*(15)*(1)+8/4 -- resolver lo que esta adentro del 
parentesis 
15*1+(2)-- ahora a resolver la division
15*1+2 -- resolver multiplicacion
15+2 -- el resultado es 17 
*/
//console.log(resultado);

