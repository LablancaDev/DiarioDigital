
// Validación del Formulario

let formulario = document.getElementById('miFormulario');// referencia al formulario

formulario.addEventListener('submit', function (event) {// se agrega un evento de escucha al formulario para submit, cuando el usuario envía el formulario
    let campos = ['nombre', 'correo', 'edad', 'direccion', 'carta'];//array que contiene los id´s de cada campo que se valida en el formulario

    campos.forEach(function (campo) {// se recorren los campos obteniendo cada referencia de los elementos input y span del formulario
        let input = document.getElementById(campo);
        let error = document.getElementById(campo + 'Error');

        if (input.value.trim() === '') {// se verifica si el campo está vacío con el método trim()
            error.textContent = 'Este campo es obligatorio';// si está vacío se muestra el mensaje de error
            event.preventDefault(); // evita el envío del formulario si hay errores
        } else {
            error.textContent = '';// Si el campo no está vacío, se borra cualquier mensaje de error 
        }
    });
});

