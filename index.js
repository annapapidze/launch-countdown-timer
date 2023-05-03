"use strict";

const date = new Date("May 12, 2023 00:00:00").getTime();

const myFunction = setInterval(function() {

// get today's date and time
    const now = new Date().getTime();

// find the distance between now and future dates 
    const difference = date - now;

// time calculations for days, hours, minutes and seconds
    const timeDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const timeHours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const timeMinutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const timeSeconds = Math.floor((difference % (1000 * 60)) / (1000));

    document.getElementById("days_id").innerHTML = timeDays;
    document.getElementById("hours_id").innerHTML = timeHours;
    document.getElementById("minutes_id").innerHTML = timeMinutes;
    document.getElementById("seconds_id").innerHTML = timeSeconds;

// if countdown is over
    if(difference<0) {
        clearInterval(myFunction);
        document.getElementById("days_id").innerHTML = "D";
        document.getElementById("hours_id").innerHTML = "O";
        document.getElementById("minutes_id").innerHTML = "N";
        document.getElementById("seconds_id").innerHTML = "E";
    };

}, 1000); 
