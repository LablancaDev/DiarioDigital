
// Agregar un controlador de eventos para el evento "submit" del formulario

let formulario = document.getElementById('miFormulario');

formulario.addEventListener('submit', function (event) {
    let campos = ['nombre', 'correo', 'edad', 'direccion', 'carta'];

    campos.forEach(function (campo) {
        let input = document.getElementById(campo);
        let error = document.getElementById(campo + 'Error');

        if (input.value.trim() === '') {
            error.textContent = 'Este campo es obligatorio';
            event.preventDefault(); // Evitar el envío del formulario si hay errores
        } else {
            error.textContent = '';
        }
    });
});



// REPASAR Y ENTENDER PARA DESPÚES EXPLICAR EN LA MEMORIA CAMBIAR LO QUE PUEDA...