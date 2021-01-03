// get elements

const pathLine = $(".path-line");
const point = $(".scroll-point");

// control element
let pointMoving = 0;
let scrollhandler = 0;

// logic
$(window).scroll(function () {
    let scroll = $(window).scrollTop();

    if ( scroll > pathLine.position().top ){

        if ( scroll > scrollhandler ){
            
            point.css({
                "offset-distance": `${pointMoving += .6}%`
            });
        } 

        if ( scroll < scrollhandler ){
            point.css({
                "offset-distance": `${pointMoving -= .6}%`
            });
        }
    };

    scrollhandler = scroll;
});


