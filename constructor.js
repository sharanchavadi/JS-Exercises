function Person(){
	this.name;
	this.city;
	this.details = function(){
		return this.name + " " + this.city;
	}
}

var p1=new Person();
p1.name = "virat";
p1.city = "Kerala";
console.log(p1.details());

var p2=new Person();
p2.name="Sachin";
p2.city="Mumbai";
console.log(p2.details());
