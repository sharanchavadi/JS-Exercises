var name = "sharan"
var lastName = "chavadi"
var tags = "ruby rails javascript"

console.log(name.length);
console.log(lastName.toUpperCase());
console.log(lastName.toLowerCase());
console.log(tags.split(" "));

var languages = tags.split(" ");
for(var i=0; i<languages.length; i++){
	console.log(languages[i].toUpperCase());
}