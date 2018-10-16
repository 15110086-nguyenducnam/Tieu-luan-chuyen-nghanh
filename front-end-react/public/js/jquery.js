$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<span style="font-size: 30px; color: #b3b3be; position: absolute; top: 35%; right: 102%"><i class="fas fa-angle-left"></i></span>', '<span style="font-size: 30px; color: #b3b3be; position: absolute; top: 35%; left: 102%"><i class="fas fa-angle-right"></i></span>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('#owl-two').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: [
        '<span style="font-size: 30px; color: #b3b3be; position: absolute; top: 35%; left: 102%"><i class="fas fa-angle-left"></i></span>', '<span style="font-size: 30px; color: #b3b3be;"><i class="fas fa-angle-right"></i></span>'
    ],
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
