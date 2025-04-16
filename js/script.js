const params = new URLSearchParams(window.location.search);

const nombre = params.get('nombre');
const apellido = params.get('apellido');
const dni = params.get('dni');
const fechaNacimiento = params.get('fecha');
const genero = params.get('genero');
const pais = params.get('pais');





const $contenedor = document.querySelector('.contendor-main');
const $titulo = document.createElement('h3');
const $parrafo = document.createElement('p');




$titulo.textContent= 'Gracias por registrarte';
$parrafo.innerHTML = `Nombre: ${nombre}<br> Apellido: ${apellido}<br> Dni: ${dni}<br> Fecha Nacimiento: ${fechaNacimiento}<br> Genero: ${genero}<br> Pais: ${pais} `
$contenedor.appendChild($titulo);
$contenedor.appendChild($parrafo)





