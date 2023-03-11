
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

//Reykjavik/Island
let ReykjavikElement = document.querySelector("#Reykjavik");
let ReykjavikDateElement = ReykjavikElement.querySelector(".date");
let ReykjavikTimeElement = ReykjavikElement.querySelector(".time")
let ReykjavikTime = moment().tz("Atlantic/Reykjavik");
ReykjavikDateElement.innerHTML = ReykjavikTime.format("ddd Do MMM YYYY");
ReykjavikTimeElement.innerHTML = ReykjavikTime.format("h:mm:ss [<small>]A[</small>]");

//Bali
let baliElement = document.querySelector("#bali");
let baliDateElement = baliElement.querySelector(".date");
let baliTimeElement = baliElement.querySelector(".time")
let baliTime = moment().tz("Asia/Jakarta");
baliDateElement.innerHTML = baliTime.format("ddd Do MMM YYYY");
baliTimeElement.innerHTML = baliTime.format("h:mm:ss [<small>]A[</small>]");

let citySelectElement = document.querySelectorAll(".city");
        for (let city = 0; city<citySelectElement.length; city++) {
         citySelectElement[city].addEventListener("click", removeCity);
        }
}

let cityInterval = null;
function updateCity(event) {
    let cityElement = document.querySelectorAll(".city");
    if (cityElement.length<4){
    let cityTimeZone = event.target.value;
        if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
        }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];

    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML += `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("ddd Do MMM YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>
    `;
//    let citySelectElement = document.querySelectorAll(".city");
//        for (let city = 0; city<citySelectElement.length; city++) {
//         citySelectElement[city].addEventListener("click", removeCity);
//        }
        let unselectCityElement = document.querySelectorAll(".city");
        unselectCityElement.forEach(city => {
            city.addEventListener(`click`, removeCity)
        })
    } 
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


function removeCity (){
    this.remove();
}

updateTime();
setInterval(updateTime, 1000);

updateCity();
setInterval(updateCity, 1000);

