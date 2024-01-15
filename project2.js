document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const body = document.body;

    menuToggle.addEventListener('click', function () {
        body.classList.toggle('menu-open');
        body.classList.toggle('menu-closed');
    });
});

