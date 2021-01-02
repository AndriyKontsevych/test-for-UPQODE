$(document).ready(function(){

    // perdons data

    const personArrray = [
        {
            name: "Julia Harrington",
            position: "ART DIRECTOR",
            about: "Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb.  We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.",
            img: "./images/team/person-1.jpg" 
        },
        {
            name: "Andrea Lucas",
            position: "Office manager",
            about: "Nostrum maxime aliquam illo in aperiam perspiciatis quia iusto qui facilis, eum dicta hic eius provident dignissimos. Adipisci eos accusantium iure nesciunt?",
            img: "./images/team/person-2.jpg" 
        },
        {
            name: "Minnie Bell",
            position: "Designer",
            about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum maxime aliquam illo in aperiam perspiciatis quia iusto qui facilis, eum dicta hic eius provident dignissimos. Adipisci eos accusantium iure nesciunt?",
            img: "./images/team/person-3.jpg" 
        },
        {
            name: "Alison Carter",
            position: "Human Resources",
            about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum maxime aliquam illo in aperiam perspiciatis quia iusto qui facilis, eum dicta hic eius provident dignissimos. Adipisci eos accusantium iure nesciunt?",
            img: "./images/team/person-4.jpg" 
        },
        {
            name: "Malcolm Lamb",
            position: "Software Engineer",
            about: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum maxime aliquam illo in aperiam perspiciatis quia iusto qui facilis, eum dicta hic eius provident dignissimos. Adipisci eos accusantium iure nesciunt?",
            img: "./images/team/person-5.jpg" 
        }
    ];

    // controllers vars

    let nextPerson = 1;
    let prePerson = 0;
    let currentPerson = 0;

    // first load

    $(".next-img").css("background-image", `url("${personArrray[nextPerson].img}")`);
    $(".next-content_person").text(`${personArrray[nextPerson].name}`);
    $(".person-photo").css("background-image", `url("${personArrray[currentPerson].img}")`);
    $(".person-photo-backgroun").css("background-image", `url("${personArrray[nextPerson].img}")`);
    $(".controller_back").css("display", "none");

    // functions to rendering

    function currentPersonElements(currentPerson){

        $(".person-info_name").text(`${personArrray[currentPerson].name}`);
        $(".person-info_position").text(`${personArrray[currentPerson].position}`);
        $(".person-info_about").text(`${personArrray[currentPerson].about}`);
        $(".person-photo").css("background-image", `url("${personArrray[currentPerson].img}")`);
    }

    function nextPersonElements(nextPerson){

        $(".next-img").css("background-image", `url("${personArrray[nextPerson].img}")`);
        $(".next-content_person").text(`${personArrray[nextPerson].name}`);
        $(".person-photo-backgroun").css("background-image", `url("${personArrray[nextPerson].img}")`);
    }

    function backPersonElements (prePerson){

        $(".back-img").css("background-image", `url("${personArrray[prePerson].img}")`);
        $(".back-content_person").text(`${personArrray[prePerson].name}`);

    }

    //  functions logics

    $(".next-img").click(function(){
        if (nextPerson < 5){
            prePerson = currentPerson;
            currentPerson = nextPerson;
            nextPerson++;

            if (nextPerson === 5) {
                nextPerson -= 1;
                prePerson = currentPerson - 1;
                currentPerson = nextPerson;
    
                $(".controller_next").css("display", "none");
            }
        } 

        if ( nextPerson > 1 ){
            currentPersonElements(currentPerson);
            backPersonElements (prePerson);
            nextPersonElements(nextPerson);
            $(".controller_back").css("display", "flex");
            
        } else {
            $(".controller_back").css("display", "none");
        }

        $(".person-photo-backgroun").css("background-image", `url("${personArrray[nextPerson].img}")`);

    });
    
    $(".back-img").click(function(){  
        if (prePerson > 0){
            nextPerson = currentPerson;
            currentPerson = prePerson;
            prePerson = currentPerson - 1;

        } else if ( prePerson === 0 ){
            nextPerson -= 1;

            $(".controller_back").css("display", "flex");
            $(".controller_next").css("display", "none");
        }

        if(nextPerson === 1 && currentPerson === 1){
                
            nextPerson = 1;
            currentPerson = 0;
            prePerson = 0; 

            $(".controller_back").css("display", "none");
            $(".controller_next").css("display", "flex");
            
        }
        
        prePerson > 0 && $(".controller_next").css("display", "flex");
 
        nextPersonElements(nextPerson);
        currentPersonElements(currentPerson);
        backPersonElements (prePerson);

    });
});
