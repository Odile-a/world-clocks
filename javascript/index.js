//function updateTime(){
// London
// let londonElement = document.querySelector("#london");
// let londonDateElement = londonElement.querySelector(".date");
// let londonTimeElement = londonElement.querySelector(".time")
// let londonTime = moment().tz("Europe/London");
// londonDateElement.innerHTML = londonTime.format("ddd Do MMM YYYY");
// londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

// //San Diego
// let sanDiegoElement = document.querySelector("#sanDiego");
// let sanDiegoDateElement = sanDiegoElement.querySelector(".date");
// let sanDiegoTimeElement = sanDiegoElement.querySelector(".time")
// let sanDiegoTime = moment().tz("America/Vancouver");
// sanDiegoDateElement.innerHTML = sanDiegoTime.format("ddd Do MMM YYYY");
// sanDiegoTimeElement.innerHTML = sanDiegoTime.format("h:mm:ss [<small>]A[</small>]");
// }
//updateTime();
//setInterval(updateTime, 1000);


function updateCity(event) {
    let cityElement = document.querySelectorAll(".city");
    console.log(cityElement.length);
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
let citySelectElement = document.querySelectorAll(".city");
 for (let city = 0; city<citySelectElement.length; city++) {
    citySelectElement[city].addEventListener("click", removeCity);
 }
    }

    
}


let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

function removeCity (){
    this.remove();
}






