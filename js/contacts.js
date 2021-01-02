// Cities url for google maps without API 
const citiesUrl = {
    losAngeles: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423283.43554757076!2d-118.69191349272444!3d34.020730498373275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z0JvQvtGBLdCQ0L3QtNC20LXQu9C10YEsINCa0LDQu9GW0YTQvtGA0L3RltGPLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1609270499539!5m2!1suk!2sua",
    newYourk: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830954674!2d-74.11976352143614!3d40.69766374845097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2z0J3RjNGOLdCZ0L7RgNC6LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1609270560169!5m2!1suk!2sua",
    boston: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94410.1161786637!2d-71.04032351992848!3d42.31445557954423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3652d0d3d311b%3A0x787cbf240162e8a0!2z0JHQvtGB0YLQvtC9LCDQnNCw0YHRgdCw0YfRg9GB0LXRgtGBLCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1609270615731!5m2!1suk!2sua",
    detroit: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94352.54923061913!2d-83.1692445190565!3d42.352816549477154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824ca0110cb1d75%3A0x5776864e35b9c4d2!2z0JTQtdGC0YDQvtC50YIsINCc0ZbRh9C40LPQsNC9LCDQodC_0L7Qu9GD0YfQtdC90ZYg0KjRgtCw0YLQuCDQkNC80LXRgNC40LrQuA!5e0!3m2!1suk!2sua!4v1609270668533!5m2!1suk!2sua"
};

// cities named
const citiesNames = {
    losAngeles: "Los Angeles",
    newYourk: "NewYork",
    boston: "Boston",
    detroit: "Detroit"
}

// get elements

const map = document.getElementById("map");
const iframe = map.children[0];
const citiesArray = document.querySelector(".cities-address");
const cityInfoList = {
    name: document.querySelector(".city-name"),
    streetOfCity: document.querySelector(".street-city"),
    schedule: "11:00 - 18:00"
}

//  set event handler

citiesArray.addEventListener("click", function(e) {
    let element = e.target;
    let currentCity = element.getAttribute("id");
    let addClassForCity = element.parentElement.parentElement;

    for (let i = 0; i < citiesArray.children.length; i++) {
        citiesArray.children[i].classList.remove("current-city");
    }

    addClassForCity.classList.add("current-city");


    cityInfoList.name.innerText = citiesNames[currentCity];
    cityInfoList.streetOfCity.innerText = citiesNames[currentCity];
    iframe.setAttribute("src", citiesUrl[currentCity]);
});

