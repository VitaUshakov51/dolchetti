(function () {
    const burger = document.getElementById('burger');
    const mobileContainer = document.getElementById('mobileContainer');
    const heroContent = document.getElementById('heroContent');
    const body = document.getElementById('body');
    burger.addEventListener('click', () => {
        body.classList.toggle('no-scroll');
        burger.classList.toggle('active');
        heroContent.classList.toggle('opacity')
        mobileContainer.classList.toggle('header__mobile-container--active');
    })

    const linksArrow = [...document.getElementsByClassName('nav-link')];
    linksArrow.forEach(link => {
        link.addEventListener('click', ()=> {
            body.classList.remove('no-scroll');
            mobileContainer.classList.remove('header__mobile-container--active');
            burger.classList.remove('active');
            heroContent.classList.remove('opacity')
        })
    })
})();