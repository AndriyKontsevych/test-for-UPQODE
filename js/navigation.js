$(document).ready(function(){

    // home slidder


    const backgroundImages = [
        "./images/home/image.jpg",
        "./images/home/Bitmap.png",
        "./images/home/image-2.jpg"
    ];
    const sliderIndecator = $(".slider-identification_item");
    let currentImage = 1;

    const homeBackground = $(".home");

    function ringsSwitcher (){

        sliderIndecator.each(function(index, ring){

            if(index === currentImage){
               $(ring).addClass("current")
            } else {
                $(ring).removeClass("current");
            };
        })
    }

    //  left button
    $(".slider-btn-1").click(function(){
        if ( currentImage === 0 ) {
            currentImage = 2;
        } else {
            currentImage--;
        }

        homeBackground.css({
            "background-image": `url(${backgroundImages[currentImage]})`
        });

        ringsSwitcher();

    });

    // right button
    $(".slider-btn-2").click(function(){
        if ( currentImage === 2 ) {
            currentImage = 0;
        } else {
            currentImage++;
        }

        homeBackground.css({
            "background-image": `url(${backgroundImages[currentImage]})`
        });

        ringsSwitcher();

    })
    
    // scroll to links

    const navLinks = $(".nav-link");
    const navigation = {
        "home": $(".home"),
        "services": $(".services"),
        "team": $(".team"),
        "contact us":  $(".contacts")
    }

    navLinks.each( (index, link) => {
        
        $(link).click(function(){
            if (navigation.hasOwnProperty($(link).children().text().toLowerCase())){

                let linkElement = $(link).children().text().toLowerCase();

                $('html, body').animate({
                    scrollTop: $(navigation[linkElement]).offset().top
                }, 500);
            }
        })
    });
});


//  burger
let toggle = true;

$('.menu-burger').click( function(){

    $('.menu-burger').toggleClass('close');
    
    if(toggle){
        $('.menu-burger-links').css({
            display: "flex"
        });
    } else {
        $('.menu-burger-links').css({
            display: "none"
        });
    }

    toggle = !toggle


});