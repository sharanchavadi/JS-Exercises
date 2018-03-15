String.prototype.camelCase = function(){
	var words = this.split(" ");
	var camelCase = "";
	words.forEach(function(word){
		camelCase += word[0].toUpperCase() + word.substr(1);
	});
	return camelCase;
}

var greeting = "hello camel case";
console.log(greeting.camelCase());
