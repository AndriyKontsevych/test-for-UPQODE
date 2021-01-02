// get elements

const pathLine = $(".path-line");
const point = $(".scroll-point");

// control element
let pointTop = 0;
let pointLeft = 0;
let scrollHeight = 0;

// logic
$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    scrollHeight = scroll;

    
    if ( scroll > pathLine.height()){
        
        if ( scroll < 1550){
            
            return point.css({
                "top": `${pointTop-=5}px`,
                "left": `${pointLeft-=8}px`
            });

        }                             
        point.css({
            "top": `${pointTop+=5}px`,
            "left": `${pointLeft+=8}px`
        });

        console.log(pointTop, pointLeft);


    };
});