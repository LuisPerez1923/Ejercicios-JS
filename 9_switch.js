/* 

Con la funcion prompt() envia un mensaje al usuario mostrandole un menu como el siguiente:

Bienvenido al menu de opciones, seleccione una opcione y de clic en continuar
a.Sumar
b.Restar
c.Multiplicar
d.Dividir
?.Salir

la funcion prompt guardara lo que el usuario escribio.

Mediante la estructura de control switch si el usuario coloca cualquiera de las opciones validas
(a, b, c, d) le mostraras mendiante un alert() el siguiente mensaje:
a -> Has seleccionado la Suma
b -> Has seleccionado la Resta
c -> Has seleccionado la Multiplicacion
d -> Has seleccionado la División

En caso de poner cualquier otra cosa mostraras en siguiente mensaje:
Opción invalida, gracias por usar el programa

*/

alert('-----Menu de Operaciones----- \nSeleccionar una opcion \n1.-Suma \n2.-Resta \n3.-Multiplicacion \n4.-Division \n5.Salir');

let opcion = Number(prompt("Por favor selecciona una opcion"));

switch(opcion){
    case 1:
        alert("Has seleccionado la Suma");
        break;

    case 2:
        alert("Has seleccionado la Resta");
        break;

    case 3:
        alert("Has seleccionado la Multiplicacion");
        break;

    case 4:
        alert("Has seleccionado la Division")
        break;
    
    case 5:
        break;
    
        default:
            alert("Opción invalida, gracias por usar el programa");
            break;
            
}