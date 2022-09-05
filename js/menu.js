document.addEventListener('DOMContentLoaded', function () {
    const bars = document.querySelector('.bars');
    const hero = document.querySelector('.hero');
    const contenedor = document.querySelector('.contenedor-nav-hero');

    const Click = ()=> {
        bars.addEventListener('click', ()=> {
            contenedor.classList.remove('d-none');
        });
}

    Click();
});