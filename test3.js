/*let listaGenerica = [];

let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python']
console.log(lenguagesDeProgramacion);
lenguagesDeProgramacion.push("Java","Ruby","GoLang");
console.log(lenguagesDeProgramacion);
//Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
function mostrarLenguagesReverso() {
    console.log(lenguagesDeProgramacion.reverse());
}
mostrarLenguagesReverso();
//Crea una función que calcule el promedio de los elementos en una lista de números.

function calculaPromedioLista(lista) {
    let suma = 0;
    console.log(lista.length);
    for (let i = 0; i < lista.length; i++) {
      suma += lista[i];
    }
    return suma / lista.length;
  }
  
let numeros = [10, 20, 30, 40, 50];
let media = calculaPromedioLista(numeros);
console.log('Média:', media);

//Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.

function mostrarMinYMax(lista) {
    let numeroMasGrande = Math.max(...lista);
    let numeroMasPequeno = Math.min(...lista);
    console.log(`El número más grande es: ${numeroMasGrande}`);
    console.log(`El número más pequeño es: ${numeroMasPequeno}`);
}

// Ejemplo de uso
let listaNumeros = [34, 2, 56, 78, 12, 5, 89, 23];
mostrarMinYMax(listaNumeros);

//Crea una función que devuelva la suma de todos los elementos en una lista.

function sumarElementosLista(lista) {
    let suma = lista.reduce((acumulador, valorActual) => acumulador + valorActual, 0);
    console.log(`la suma es: ${suma}`);
    return suma;
}
// Ejemplo de uso
let listaElementos = [1,2,3,4,5];
sumarElementosLista(listaElementos);

// Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.

function encontrarIndiceElemento(lista, elemento) {
for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
        console.log(`la posición es: ${i}`);
        return i; // Retorna el índice del elemento encontrado
    }
}
console.log(`no se encuentra en la lista.`);
return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
// Ejemplo de uso
let valores = [1,2,3,4,5];
let numero = 6;
encontrarIndiceElemento(valores, numero);

//Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
function sumarListas(lista1, lista2) {
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}
// Ejemplo de uso
let numeros1 = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
let resultado = sumarListas(numeros1, numeros2);
console.log('Lista suma:', resultado);*/

function generaListaAlCuadrado(lista) {
    let listaCuadrado = [];
    for (let i = 0; i < lista.length; i++) {
        listaCuadrado.push(lista[i] * lista[i]);
    }
    return listaCuadrado;
}
// Ejemplo de uso
let numeros = [2,4,5,6];
resultado = generaListaAlCuadrado(numeros);
console.log(resultado);