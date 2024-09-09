document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('background-music');
    var welcomeScreen = document.getElementById('welcome-screen');
    var welcomeButton = document.getElementById('welcome-button');
    var playButton = document.getElementById('magic-button'); // El botón interactivo es este
    var modal = document.getElementById('modal');
    var closeModal = document.getElementsByClassName('close')[0];

    // Oculta la pantalla de bienvenida y reproduce la música
    welcomeButton.addEventListener('click', function () {
        welcomeScreen.style.display = 'none'; // Oculta la pantalla de bienvenida
        audio.play().then(() => {
            console.log('La música está reproduciéndose.');
        }).catch(error => {
            console.log('Error al reproducir la música:', error);
        });
    });

    // Muestra el modal cuando se presiona el botón interactivo
    playButton.addEventListener('click', function () {
        modal.style.display = "flex"; // Muestra el modal con flex para que se centre el contenido
    });

    // Cierra el modal cuando se presiona la "X"
    closeModal.addEventListener('click', function () {
        modal.style.display = "none"; // Oculta el modal
    });

    // Cierra el modal si el usuario hace clic fuera de la ventana del modal
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Oculta el modal si se hace clic fuera
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('modal');
    var closeModal = document.getElementsByClassName('close')[0];

    // Cierra el modal cuando se presiona la "X"
    closeModal.addEventListener('click', function () {
        modal.style.display = "none"; // Oculta el modal
    });

    // Cierra el modal si el usuario hace clic fuera de la ventana del modal
    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Oculta el modal si se hace clic fuera
        }
    });
});
