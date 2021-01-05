// set a variable for the current date/time
var now = moment();
console.log(now.hour());
// print current date/time in browser
$("#currentDay").text("Current date/time: " + now._d);

// timeblocks change color if it is currently later
if(now.hour() > 10){
    $("#9").css("background-color", "red");
}
else {
    $("#9").css("background-color", "green");
}

if(now.hour() > 11){
    $("#10").css("background-color", "red");
}
else {
    $("#10").css("background-color", "green");
}

if(now.hour() > 12){
    $("#11").css("background-color", "red");
}
else {
    $("#11").css("background-color", "green");
}

if(now.hour() > 13){
    $("#12").css("background-color", "red");
}
else {
    $("#12").css("background-color", "green");
}

if(now.hour() > 14){
    $("#1").css("background-color", "red");
}
else {
    $("#1").css("background-color", "green");
}

if(now.hour() > 15){
    $("#2").css("background-color", "red");
}
else {
    $("#2").css("background-color", "green");
}

if(now.hour() > 16){
    $("#3").css("background-color", "red");
}
else {
    $("#3").css("background-color", "green");
}

if(now.hour() > 17){
    $("#4").css("background-color", "red");
}
else {
    $("#4").css("background-color", "green");
}
// edit timeblocks with tasks

// 
