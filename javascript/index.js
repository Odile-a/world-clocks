// London
let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time")
let londonTime = moment().tz("Europe/London");
londonDateElement.innerHTML = londonTime.format("ddd Do MMM YYYY");
londonTimeElement.innerHTML = londonTime.format("h:mm:ss  [<small>AM</small>]");