$(document).ready(function() {
    $('#mobile-btn').on('click', function() {
        $('#mobile-menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItens = $('.item');

    $(window).on('scroll', function (){
        const header = $('header');
        let secaoAtiva = 0;
        const scrollPosicao = $(window).scrollTop() - header.outerHeight();

        if (scrollPosicao < 1) {
            header.css('box-shadow', none);
        }
        else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTopo = section.offset().top - 96;
            const sectionFim = sectionTopo + section.outerHeight();

            if(scrollPosicao >= sectionTopo && scrollPosicao < sectionFim){
                secaoAtiva = i;
                return false;
            }
        }) 
        navItens.removeClass('active');
        $(navItens[secaoAtiva]).addClass('active');
    })    

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.livro', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })

    ScrollReveal().reveal('.avaliacao', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    })
});