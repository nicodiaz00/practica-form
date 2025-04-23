const $formulario = document.querySelector('#formulario-registro');

$formulario.addEventListener('submit', function (e)  {
    e.preventDefault();

    const datos = new FormData($formulario);
    console.log(`${datos.get('nombre')} ${datos.get('apellido')} ${datos.get('email')} ${datos.get('contrasena')} ${datos.get('genero')} ${datos.get('pais')}`);
    /*
    console.log(`Nombre: ${datos.get('nombre')}`);
    console.log(`Apellido: ${datos.get('apellido')}`);
    console.log(`Email: ${datos.get('email')}`);
    console.log(`Contraseña: ${datos.get('contrasena')}`);
    console.log(`Género: ${datos.get('genero')}`);
    console.log(`País: ${datos.get('pais')}`);
    */
})


















/*const params = new URLSearchParams(window.location.search);

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
*/




