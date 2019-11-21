// calendar App Pseudo Code
// need a row for each hour of the day between 8a and 5p
// create an input field in each hour
// create a save button for each hour and tie the content added to an hour to be stored in local storage
// create a time and date field that displays the current time and day


// list of needed variables
// currentDayEl - get element by id = currentDay
// Hour 9 - and a button for each hour
// Hour 10 - and a button for each hour 
// Hour 11 - and a button for each hour 
// Hour 12 - and a button for each hour 
// Hour 13 - and a button for each hour 
// Hour 14 - and a button for each hour 
// Hour 15 - and a button for each hour 
// Hour 16 - and a button for each hour 
// 


// display time and date in element currentDay

const currentDayEl = document.getElementById("currentDay");


function clock() {

    interval = setInterval(function () {

        let time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

        currentDayEl.innerHTML = time

    }, 1000);

}
clock()

