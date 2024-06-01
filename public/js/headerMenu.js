// public/js/main.js
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.header-menu-text');

    // Trova l'elemento del menu corrente in base all'URL
    menuItems.forEach(item => {
        if (window.location.pathname === item.getAttribute('href')) {
            item.classList.add('active');
        }
    });

    // Aggiorna l'elemento del menu corrente quando un link del menu viene cliccato
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuItems.forEach(otherItem => otherItem.classList.remove('active'));
            this.classList.add('active');
        });
    });
});