var names = ["virat","sachin","sachin","rahul"];

//finding unique values in array
var players = [];
var output = {};
names.forEach(function(name){
	if(players.indexOf(name) == -1){
		players.push(name);
	}
});

console.log(players);
//finding player count
players.forEach(function(player){
  output[player] = names.filter(function(name){
  	return name == player;
  }).length;
});

console.log(output);

//displaying count star
for(var key in output){
	console.log(key+":"+"*".repeat(output[key]));
	console.log(output[key]);
}