/* GET ELEMENTOS DEL HTML */

const form = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const fecha = document.getElementById('fecha');
const personas = document.getElementById('personas');
const envio = document.getElementById('envio');


/* FUNCION COMPARADORA DE FECHAS */

function compareDates() {
    let fechaInput = fecha.value;
    // Convertimos la fecha en un objeta Date
    let fechaIngresada = new Date(fechaInput);
    let today = new Date();
    // Comparamos
    if (fechaIngresada < today) {
        return true
    }else{
        return false
    }
    }

/* EVENTO SUBMIT FORMULARIO */

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let mensaje = document.getElementById('mensaje');

    if ((nombre.value.length == 0) || (apellido.value.length == 0) || (email.value.length == 0) || (fecha.value.length == 0) || (personas.value.length == 0)) {
        mensaje.innerHTML = `<p class="mensaje-error">No puedes dejar ningun campo vacio.</p>`;
    }else if(personas.value == 0 || personas.value < 0){
        mensaje.innerHTML= `<p class="mensaje-error">La cantidad de personas ingresadas es incorrecta. </p>`;
    }else if(!email.value.includes(".")){
        mensaje.innerHTML= `<p class="mensaje-error">El correo ingresado es incorrecto.</p>`;
    }else if (compareDates()) {
        mensaje.innerHTML = `<p class="mensaje-error">La fecha ingresada es incorrecta.</p>`;
    }  
    else{
        form.classList.add('display');
        envio.classList.remove('display');
    }
}) 