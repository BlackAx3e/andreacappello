
    document.getElementById('menu-toggle').addEventListener('click', function() {
        var navLinks = document.getElementById('nav-links');
        var menuToggle = document.getElementById('menu-toggle');
        var navbar = document.getElementById('navbar'); // Seleziona la navbar

        // Mostra/nasconde i link
        navLinks.classList.toggle('active');
        
        // Trasforma l'icona hamburger in "X"
        menuToggle.classList.toggle('active');
        
        // Cambia il colore della navbar
        navbar.classList.toggle('active');
    });

document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.width = '120px'; /* Allarga il collegamento */
        link.style.height = '40px'; /* Allarga l'altezza del collegamento */
        link.style.opacity = '1'; /* Aumenta l'opacità */
        link.querySelector('::after').style.opacity = '1'; /* Mostra il testo */
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.width = '30px'; /* Ripristina la larghezza */
        link.style.height = '30px'; /* Ripristina l'altezza */
        link.style.opacity = '0.4'; /* Ripristina l'opacità */
        link.querySelector('::after').style.opacity = '0'; /* Nasconde il testo */
    });
});

