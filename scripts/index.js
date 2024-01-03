(function () {

    new WOW({
            animateClass: 'animate__animated',
        }
    ).init();

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


    const submitButton = document.getElementById('submitButton');




    const phone = document.getElementById('phone');
    const maskOptions = {
        mask: '+{7}(000)000-00-00'
    };
    const mask = IMask(phone, maskOptions);

    const inputElements = [...document.getElementsByTagName('input')];
    inputElements.forEach(input => {
        input.addEventListener('change', ()=> {
            const result = inputElements.every(item => {
               return item.value.length !== 0
            })
            if (result === true) {
                submitButton.disabled = false;
            } else {
                submitButton.disabled = true;
            }
        })
    })
    const message = document.getElementById('message');

    let checkSend = sessionStorage.getItem('sendForm');
    if (checkSend) {
        message.style.opacity = '1';
    } else {
        message.style.opacity = '0';
    }
    submitButton.addEventListener('click', () => {
        const form = $(this).closest('form');
        const actUrl = form.attr('action');
            $.ajax({
                url: actUrl,
                type: 'post',
                dataType: 'html',
                data: form.serialize(),
                success: function(data) {
                    sessionStorage.setItem('sendForm', 'true');
                    message.style.opacity = '1';
                    inputElements.forEach(input => {
                        input.value = '';
                        submitButton.disabled = true;
                    })

                },
                error:	 function() {
                    message.style.opacity = '1';
                    message.style.background = 'rgba(255,0,6,0.58)'
                    message.innerText = 'Ошибка( Обновите страницу и попробуйте еще раз';
                }
            });

    })



})();