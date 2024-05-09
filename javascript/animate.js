// Función que se ejecuta al enviar el formulario
document.getElementById('nombreForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada

    // Obtén el nombre ingresado por el usuario
    var nombreUsuario = document.getElementById('nombreUsuario').value;

    // Muestra el nombre en el saludo personalizado
    var nombreSaludo = document.getElementById('nombreSaludo');
    nombreSaludo.textContent = nombreUsuario;

    // Muestra la sección de saludo
    document.getElementById('saludo').style.display = 'block';
});