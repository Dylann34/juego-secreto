let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora del Desafío');

function mostrarConsola() {
    console.log('El botón fue clicado');
}

function preguntaCiudad() {
    let ciudad = prompt('Ingresa el nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function alertaAmor() {
    alert('Yo amo JS');
}

function sumaNumeros() {
    let numero1 = parseInt(prompt('Vamos a sumar... Ingresa un número'));
    let numero2 = parseInt(prompt('Ingresa el segundo número'));
    alert(numero1 + numero2);
}