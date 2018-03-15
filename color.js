var colors = [["blue","cool"],["red","warm"]];
var output = [];

colors.forEach(function(color){
	var obj = {};
	obj[color[0]] = color[1];
	output.push(obj);
});

console.log(output);