function updateTime(){
// London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time")
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("ddd Do MMM YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");

//San Diego
let sanDiegoElement = document.querySelector("#sanDiego");
let sanDiegoDateElement = sanDiegoElement.querySelector(".date");
let sanDiegoTimeElement = sanDiegoElement.querySelector(".time")
let sanDiegoTime = moment().tz("America/Vancouver");
sanDiegoDateElement.innerHTML = sanDiegoTime.format("ddd Do MMM YYYY");
sanDiegoTimeElement.innerHTML = sanDiegoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateTime();
setInterval(updateTime, 1000);
