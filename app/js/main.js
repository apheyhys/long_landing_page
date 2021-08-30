// Slider
$(function () {
    $('.facts__slider-inner').slick({
        dots: true,
        dotsClass: 'slider-dots facts__dots',
        infinite: true,
        speed: 300,
        cssEase: 'linear',
        prevArrow: "<div class='slider-arrow__prevArrow facts__prevArrow'></div>",
        nextArrow: "<div class='slider-arrow__nextArrow facts__nextArrow'></div>",
    })
    $('.form-views__slider-inner').slick({
        lazyLoad: 'ondemand',
        dots: true,
        dotsClass: 'slider-dots form-views__dots',
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1321,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        prevArrow: "<div class='slider-arrow__prevArrow form-views__prevArrow'></div>",
        nextArrow: "<div class='slider-arrow__nextArrow  form-views__nextArrow'></div>",
    })
    $('.reviews__slider-inner').slick({
        dots: true,
        dotsClass: 'slider-dots reviews__dots',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,

        variableWidth: true,
        responsive: [{
            breakpoint: 1100,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }],
        prevArrow: "<div class='slider-arrow__prevArrow reviews__prevArrow'></div>",
        nextArrow: "<div class='slider-arrow__nextArrow  reviews__nextArrow'></div>",
    })
    $('.reviews__slider-inner').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var current = $(slick.$slides[currentSlide]);
        current.html(current.html());
    });

})

// Shuffle image
$(function () {
    var parent1 = $(".applications__items-column1");
    var parent2 = $(".applications__items-column2");
    var parent3 = $(".applications__items-column3");
    var divs1 = parent1.children();
    var divs2 = parent2.children();
    var divs3 = parent3.children();
    while (divs1.length) {
        parent1.append(divs1.splice(Math.floor(Math.random() * divs1.length), 1)[0]);       
    }
    while (divs2.length) {
        parent2.append(divs2.splice(Math.floor(Math.random() * divs2.length), 1)[0]);      
    }
    while (divs3.length) {
        parent3.append(divs3.splice(Math.floor(Math.random() * divs3.length), 1)[0]);    
    }
})

// Accordion
var acc = document.getElementsByClassName("faq__item-btn");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("faq__item--active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
            panel.style.maxHeight = null;
        } else {
            panel.style.display = "block";
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Burger-menu
$((function () {
    $(".header__top-burger-menu").hide();
    $(".header__top-burger-menu-link").on('click', function () {
        $(".header__top-burger-menu").slideToggle("slow")
    });

    $(".header__top-burger-menu-close-btn").on('click', function () {
        $(".header__top-burger-menu").slideToggle("slow")
    });
}))


// Custom select
if (typeof require !== "undefined") {
    var customSelect = require("./node_modules/custom-select/build/jquery.custom-select.min.js")
        .default;
    require("./node_modules/custom-select/build/custom-select.css");
}
customSelect('.tariffs__card-choice-select');



// change cost
$('#tariff-start').on('change', function () {
    $("#tariff-cost-standart").html(this.value * 590 + "<span>€</span>")
});

$('#tariff-premium').on('change', function () {
    $("#tariff-cost-premium").html(this.value * 990 + "<span>€</span>")
});


// Modal sidebar step4 - radio + input
var radiоStep4 = document.querySelectorAll('input[name="modal-step4"]');

for (let i = 0; i < radiоStep4.length; i++) {
    radiоStep4[i].addEventListener("click", function () {
        if (document.getElementById("modal-step4-radio5").checked) {
            document.getElementById("modal-step4-input1").disabled = false;
            document.getElementById("modal-step4-input2").disabled = false;
        } else {
            document.getElementById("modal-step4-input1").disabled = true;
            document.getElementById("modal-step4-input2").disabled = true;
        }
    });
}

// Modal sidebar step5 - radio + input
var radiоStep5 = document.querySelectorAll('input[name="modal-step5"]');

for (let i = 0; i < radiоStep5.length; i++) {
    radiоStep5[i].addEventListener("click", function () {
        if (document.getElementById("modal-step5-radio6").checked) {
            document.getElementById("modal-step5-input1").disabled = false;
            document.getElementById("modal-step5-input2").disabled = false;
        } else {
            document.getElementById("modal-step5-input1").disabled = true;
            document.getElementById("modal-step5-input2").disabled = true;
        }
    });
}

// Modal sidebar
$(function () {
    $("#modal-open-link,#modal-open-link-differences,#modal-open-link-fifth-step,#modal-open-link-header,#modal-open-link-burger").on('click', function () {
        document.getElementsByClassName('wrapper')[0].style.marginRight = '36px';
        setTimeout(() => {
            document.getElementsByClassName('modal__wrapper')[0].style.visibility = 'visible';
            document.getElementsByClassName('modal__wrapper')[0].style.opacity = '1';
        }, 500);

        $('#modal-start').modal({
            closeExisting: true,
            fadeDuration: 500
        });
    });


    $('#modal-start-link').on('click', function () {
        $('#modal-step1').modal({
            closeExisting: true
        });
    });


    $('#modal-step1-link').on('click', function () {
        $('#modal-step2').modal({
            closeExisting: true
        });
    });


    $('#modal-step2-link').on('click', function () {
        $('#modal-step3').modal({
            closeExisting: true
        });
    });


    $('#modal-step3-link').on('click', function () {
        $('#modal-step4').modal({
            closeExisting: true
        });
    });


    $('#modal-step4-link').on('click', function () {
        $('#modal-step5').modal({
            closeExisting: true
        });
    });

    $('#modal-step5-link').on('click', function () {
        $('#modal-contact').modal({
            closeExisting: true
        });
    });

    $('#modal-contact-link').on('click', function () {
        $('#modal-social').modal({
            closeExisting: true
        });
    });


    $('#modal-step1-before-link').on('click', function () {
        $('#modal-start').modal({
            closeExisting: true
        });
    });

    $('#modal-step2-before-link').on('click', function () {
        $('#modal-step1').modal({
            closeExisting: true
        });
    });


    $('#modal-step3-before-link').on('click', function () {
        $('#modal-step2').modal({
            closeExisting: true
        });
    });

    $('#modal-step4-before-link').on('click', function () {
        $('#modal-step3').modal({
            closeExisting: true
        });
    });

    $('#modal-step5-before-link').on('click', function () {
        $('#modal-step4').modal({
            closeExisting: true
        });
    });

    $('#modal-contact-before-link').on('click', function () {
        $('#modal-step5').modal({
            closeExisting: true
        });
    });

    $('#modal-social-before-link').on('click', function () {
        $('#modal-contact').modal({
            closeExisting: true
        });
    });

    $(".modal__close-btn").on('click', function () {
        document.getElementsByClassName('wrapper')[0].style.marginRight = '20px';
        document.getElementsByClassName('modal__wrapper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('modal__wrapper')[0].style.opacity = '0';
        $.modal.close();
    });

    $(".modal__wrapper").on('click', function () {
        document.getElementsByClassName('wrapper')[0].style.marginRight = '20px';
        document.getElementsByClassName('modal__wrapper')[0].style.visibility = 'hidden';
        document.getElementsByClassName('modal__wrapper')[0].style.opacity = '0';
        $.modal.close();
    });
});


// custom poster @ lazy loading video slider
$(function () {
    var videos = $(".reviews__slider-item-video");

    videos.on("click", function () {
        var elm = $(this),
            conts = elm.contents(),
            le = conts.length,
            ifr = null;

        for (var i = 0; i < le; i++) {
            if (conts[i].nodeType == 8) ifr = conts[i].textContent;
        }

        elm.addClass("reviews__slider-player").html(ifr);
        elm.off("click");
    });
});

