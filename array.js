var numbers = [10,9,20,30,50,2];
var names= ["mahesh","suresh","veeresh"];
var player;

console.log(numbers[0]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(player);

console.log(numbers.reverse());
console.log(names.join(", "));
console.log(names.sort()); //for array of string values

console.log(numbers.sort(function(a,b){ //for array of numerical value
	return a-b; //ascending order
}));

console.log(numbers.sort(function(a,b){
	return b-a; //descending order
}));

numbers.push(45);
numbers.pop();
numbers.unshift(1);
numbers.shift();
console.log(numbers);

//mutable
console.log(numbers);
console.log(numbers.splice(0,3));
console.log(numbers);

//immutable
console.log(names);
console.log(names.slice(0,3));
console.log(names);



