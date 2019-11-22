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



const hours = [{
    hour: "9a",
    value: 9,
    text: ""

},
{
    hour: "10a",
    value: 10,
    text: ""
},
{
    hour: "11a",
    value: 11,
    text: ""
},
{
    hour: "12n",
    value: 12,
    text: ""
},
{
    hour: "1p",
    value: 13,
    text: ""
},
{
    hour: "2p",
    value: 14,
    text: ""
},
{
    hour: "3p",
    value: 15,
    text: ""
},
{
    hour: "4p",
    value: 16,
    text: ""
}]


function initCalendar(){

    let dayHour = moment().format('H');
    console.log(dayHour);

    function clock() {
        
        interval = setInterval(function () {
            
            time = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
            
            currentDayEl.innerHTML = time
            
        }, 1000);
        
    }
    clock()
    
    console.log(hours);
    
    
    for (let i = 0; i < hours.length; i++) {
        const calendarSpace = document.getElementById("calendar-space");
        const rowEl = document.createElement("row");
        rowEl.setAttribute("class", "row");
        const columnHourEl = document.createElement("textarea");
        const columnSaveEl = document.createElement("button");
        columnHourEl.setAttribute("class", "hour col-8 border border-dark");
        columnHourEl.setAttribute("placeholder", hours[i].hour);
        columnHourEl.setAttribute("id", hours[i].value);
        // columnHourEl.innerText = hours[i].hour.value;
        columnSaveEl.setAttribute("class", "saveBtn col-2");
        columnSaveEl.innerText = "Save";
        
        // console.log(hours[i].value);
        calendarSpace.append(rowEl);
        rowEl.append(columnHourEl);
        rowEl.append(columnSaveEl);
        
        console.log(columnHourEl);
        
        const saveButtons = document.querySelectorAll(".saveBtn");
        // console.log(saveButtons);
        let input = document.getElementById(hours[i].value);


        //local storage piece is not functioning - I will need major assistance with this portion
    
        // if (localStorage){

        //     columnHourEl.innerText = localStorage.getItem("input", hours[i].text);
        // }

        // console.log(input);
        // console.log(hours);
        
        saveButtons[i].addEventListener("click", function () {
            hours[i].text = input.value;
            console.log(hours);       
            localStorage.setItem("input", hours[i].text)      
        })
        const userInputStr = localStorage.getItem(hours[i].text);
        const userInput = JSON.parse(userInputStr)
        console.log(userInput);
        localStorage.setItem("input", JSON.stringify(userInput));

//Ran out of time for the colorization as well
//         if (hours[i].value < dayHour){
//             columnHourEl.setAttribute("class", "hour col-8 border border-dark past");
//         }else if( columnHourEl[i].value === dayHour){
//             columnHourEl.setAttribute("class", "hour col-8 border border-dark present");
//         }else if( columnHourEl[i].value > dayHour){
//             columnHourEl.setAttribute("class", "hour col-8 border border-dark future");
//         }

// console.log(columnHourEl[i].value)
    }
   

        
        
    
}
initCalendar()
    
    
    
    
    
    
    
    