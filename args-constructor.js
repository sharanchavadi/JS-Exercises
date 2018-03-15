function Person(name,city){
	this.name = name;
	this.city = city;
	this.details = function(){
		return this.name+" "+this.city;
	}
}

var p1=new Person("virat","kerala");
console.log(p1.details());

var p2 = new Person(); 
console.log(p2.details());//gives undefined

var p3 = new Person("virat","kerala","player"); //takes only first two args
console.log(p3.details());