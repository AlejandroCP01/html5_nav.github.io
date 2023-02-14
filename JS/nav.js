
    document.addEventListener('DOMContentLoaded', () => {
        // Seleccionar todos los elementos del menú
        const menuItems = document.querySelectorAll('nav ul li a');
        
            // Agregar un controlador de eventos clic a cada elemento del menú
            menuItems.forEach(item => {
            item.addEventListener('click', event => {
                // Evitar que el enlace se abra automáticamente
                event.preventDefault();
        
                // Obtener el ID del elemento al que se hace referencia en el enlace
                const targetId = event.target.getAttribute('href').slice(1);
        
                // Desplazarse suavemente a la sección correspondiente
                document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
                });
            });
        });

        // Cerrar nav
        const menuToggle = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.menu');
        
        // Al hacer clic en el botón, se añade o se elimina la clase "show" en la lista de elementos con clase "menu". 
        // La clase "show" aplica una transformación CSS que hace que el menú se muestre o se oculte suavemente.
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('show-menu');
        });
    });

