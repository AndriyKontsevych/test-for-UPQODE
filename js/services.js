// get elements

const pathLine = $(".path-line");
const point = $(".path-scroll-point");

let rotate = 0;
let pathLineHeight = pathLine.height()

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if ( scroll > pathLine.width()){

        pathLineHeight -= 80;

        console.log(pathLineHeight);

        point.css({
            // "height": `${pathLineHeight}`,
            "transform": `rotate(${rotate++}deg)`
        })
    };
});