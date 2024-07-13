/*function calculaIMC(altura, peso) {
    let IMC = peso / (altura * altura);
    console.log(`tu IMC es de ${IMC}`);
    return IMC;
}

let altura = 1.71;
let peso = 71;
calculaIMC(altura, peso);

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
}
// Ejemplo de uso
let numero = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${numero} es ${resultado}`); 

function convertirDolares(dolares) {
    let cotizacionDolar = 939;
    let pesoClp = dolares * cotizacionDolar;
    return pesoClp;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnClp = convertirDolares(valorEnDolar);
console.log(`${valorEnDolar} dólares es $${valorEnClp} CLP`);

function calcularAreayPerimetroRectangulo(altura, anchura) {
    let area = altura * anchura;
    let perimetro = 2 * (altura + anchura);
    console.log(`Área: ${area}`);
    console.log(`Perimetro: ${perimetro}`);
}

// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreayPerimetroRectangulo(altura, anchura);

function calcularAreayPerimetroCirculo(radio) {
    let Pi = 3.14;
    let perimetro = 2 * Pi * radio;
    let area = Pi * radio * radio;
    console.log("Área: " + area);
    console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreayPerimetroCirculo(radio);*/

function mostrarTablaDeMultiplicar(numero) {
    for (var i = 1; i <= 10; i++) {
      var resultado = numero * i;
      console.log(numero + " x " + i + " = " + resultado);
    }
  }
  // Ejemplo de uso
  let numero = 7;
  mostrarTablaDeMultiplicar(numero);