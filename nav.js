const mobileOpen = document.getElementById('menuOpen');
        nav = document.querySelector('nav');
        mobileClose = document.getElementById('menuClose');

mobileOpen.addEventListener("click", () => {
    nav.classList.add('menu');
});
mobileClose.addEventListener("click", () => {
    nav.classList.remove('menu');
});

