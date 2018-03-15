function Person(firstname,lastname){
	this.firstname=firstname;
	this.lastname=lastname;
	this.greet = function(language){
		return "Hello "+this.firstname+" "+this.lastname+"!";
		if (language == "hindi"){
			return "namaste, "+this.fistname+" "+this.lastname;
		} else if(language == "kanada"){
			return "Namaskara, "+this.fistname+" "+this.lastname;
		} else {
			return "Hello, "+this.fistname+" "+this.lastname;
		}
	}
}

var p=new Person("Bob","Smith");

console.log(p.greet("hindi"));