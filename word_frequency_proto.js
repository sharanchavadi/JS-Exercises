//defining our own prototype of function unique
Array.prototype.unique = function(){
   var result = [];
   this.forEach(function(value){
	  if(result.indexOf(value) == -1){
		 result.push(value);
	  }
   });
   return result;
}

//defining our own prototype of function count

Array.prototype.count = function(arg){
    return this.filter(function(value){
        return value == arg;
    }).length;
}

var names = ["virat","sachin","sachin","rahul"];
var players = names.unique();
console.log(players);
console.log(output);
