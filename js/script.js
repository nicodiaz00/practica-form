
const params = new URLSearchParams(window.location.search);

const nombre = params.get('nombre');
const apellido = params.get('apellido');
const email = params.get('email');
const contrasena = params.get('contrasena');
const genero = params.get('genero');
const pais = params.get('pais');





const $contenedor = document.querySelector('.contenedor-main');
const $titulo = document.createElement('h3');
const $parrafo = document.createElement('p');




$titulo.textContent= 'Gracias por registrarte';
$parrafo.innerHTML = `Nombre: ${nombre}<br> Apellido: ${apellido}<br> Email: ${email}<br>Contraseña: ${contrasena}<br> Genero: ${genero}<br> Pais: ${pais} `


$contenedor.appendChild($titulo);

$contenedor.appendChild($parrafo)





