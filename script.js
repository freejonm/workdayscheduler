// set a variable for the current date/time
var now = moment();
console.log(now);
// print current date/time in browser
$("#currentDay").text("Current date/time: " + now._d);

renderEvents();

// timeblocks change color relative to time of day
function changeColor(number, string){
    if(now.hour() < number){
        $(string).addClass("future");
    }

    else if (now.hour() > number){
        $(string).addClass("past");
    }

    else {
        $(string).addClass("present");
    }
}

changeColor(9, "#9");
changeColor(10, "#10");
changeColor(11, "#11");
changeColor(12, "#12");
changeColor(13, "#1");
changeColor(14, "#2");
changeColor(15, "#3");
changeColor(16, "#4");

// user can add events that are added to local memory


$(".time-block").click(function(event){
    var newEvent = prompt("What is the title of the event you want to add?")

    $(event.target).text(newEvent);

    localStorage.setItem("hour", event.target.id);

    localStorage.setItem("event", newEvent);
});

// events stored in local memory populate when browser refreshes

function renderEvents(){
    var hour = localStorage.getItem("hour");
    var el = "#"
    var hourEl = el + hour

    var event = localStorage.getItem("event");

    console.log(hourEl + event);

    $("#hour").text(event);

}

$(".saveBtn").click(function(){
    
})
