
var today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getDate());
console.log(today.getMonth());

//month starts 0, like 0-jan....11-dec
//day starts 0, like 0-sun....6-sat

console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());

var newYear = new Date(2017,0,2);
console.log(newYear);

var days = {
	0: "Sunday",
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
	4: "Thursday",
	5: "Friday",
	6: "Saturday"
}

var months = {
	0: "January",
	1: "February",
	2: "March",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "August",
	8: "September",
	9: "October",
	10: "November",
	11: "December"
}

//today is 24 
console.log("today is "+ today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear() + " and its a " + days[today.getDay()])

