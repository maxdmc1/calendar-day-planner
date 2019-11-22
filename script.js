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


// display time and date in element currentDay - https://momentjs.com/docs/#/displaying/

const currentDayEl = document.getElementById("currentDay");
let time

let hours = [{
    hour: "9a",
    value: 9
},
{
    hour: "10a",
    value: 10
},
{
    hour: "11a",
    value: 11
},
{
    hour: "12n",
    value: 12
},
{
    hour: "1p",
    value: 13
},
{
    hour: "2p",
    value: 14
},
{
    hour: "3p",
    value: 15
},
{
    hour: "4p",
    value: 16
}]

function clock() {

    interval = setInterval(function () {

        time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

        currentDayEl.innerHTML = time

    }, 1000);

}
clock()

console.log(hours);


for (let i =0; i < hours.length; i++){
    const calendarSpace = document.getElementById("calendar-space");
    const rowEl = document.createElement("row");
    rowEl.setAttribute("class", "row");
    const columnHourEl = document.createElement("textarea");
    const columnSaveEl = document.createElement("button");
    columnHourEl.setAttribute("class", "hour col-8 border border-dark");
    columnHourEl.setAttribute("placeholder", hours[i].hour);
    // columnHourEl.innerText = hours[i].hour.value;
    columnSaveEl.setAttribute("class", "saveBtn col-2");
    columnSaveEl.innerText = "Save";
    
    console.log(hours[i].hour);
    calendarSpace.append(rowEl);
    rowEl.append(columnHourEl);
    rowEl.append(columnSaveEl);
}

