
//time
function updateTime(){
//Tokyo
let tokyoElement = document.querySelector("#tokyo");
let tokyoDateElement = tokyoElement.querySelector(".date");
let tokyoTimeElement = tokyoElement.querySelector(".time")
let tokyoTime = moment().tz("Asia/Tokyo");
tokyoDateElement.innerHTML = tokyoTime.format("ddd Do MMM YYYY");
tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");

//San Diego
let sanDiegoElement = document.querySelector("#san-diego");
let sanDiegoDateElement = sanDiegoElement.querySelector(".date");
let sanDiegoTimeElement = sanDiegoElement.querySelector(".time")
let sanDiegoTime = moment().tz("America/Vancouver");
sanDiegoDateElement.innerHTML = sanDiegoTime.format("ddd Do MMM YYYY");
sanDiegoTimeElement.innerHTML = sanDiegoTime.format("h:mm:ss [<small>]A[</small>]");

//Bali
let baliElement = document.querySelector("#bali");
let baliDateElement = baliElement.querySelector(".date");
let baliTimeElement = baliElement.querySelector(".time")
let baliTime = moment().tz("Asia/Jakarta");
baliDateElement.innerHTML = baliTime.format("ddd Do MMM YYYY");
baliTimeElement.innerHTML = baliTime.format("h:mm:ss [<small>]A[</small>]");

//option to remove a city by selection
let citySelectElement = document.querySelectorAll(".city");
        for (let city = 0; city<citySelectElement.length; city++) {
         citySelectElement[city].addEventListener("click", removeCity);
        }
}

//add a Div for a new city 
function updateCity(event) {
    let cityElement = document.querySelectorAll(".city");
    if (cityElement.length<4){
        let cityTimeZone = event.target.value;
            if (cityTimeZone === "current") {
            cityTimeZone = moment.tz.guess();
            }
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityId = cityName.replaceAll(" ","_");
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML += `
        <div class="city" id="${cityId}">
            <div>
                <h2>${cityName}</h2>
                <div class="date"></div>
            </div>
            <div class="time"></div>
        </div>
        `;
//set an interval on the div only => function updateTimeBasic
        updateTimeBasic(cityTimeZone, cityId);
        setInterval(updateTimeBasic, 1000, cityTimeZone, cityId);
//option to remove a city by selection
        let unselectCityElement = document.querySelectorAll(".city");
        unselectCityElement.forEach(city => {
            city.addEventListener(`click`, removeCity)
        })
    } 
}

//isolate the elements to update
function updateTimeBasic (cityTimeZone, cityId) {
    //alert(cityId + cityTimeZone);
    let cityElement = document.querySelector("#"+cityId);
    let dateElement = cityElement.querySelector(".date");
    let timeElement = cityElement.querySelector(".time");
    let cityTime = moment().tz(cityTimeZone);
    dateElement.innerHTML = cityTime.format("ddd Do MMM YYYY");
    timeElement.innerHTML = cityTime.format("h:mm:ss [<small>]A[</small>]");
}

//EventListener selection location
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

//remove
function removeCity (){
    this.remove();
}

//setInterval on the main page
updateTime();
setInterval(updateTime, 1000);


