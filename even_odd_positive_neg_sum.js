var numbers = [10,21,-10,3,1,45,56];

result = numbers.filter(function(n){
	return n<0;
});

if(result==0){
	console.log("no negative numbers");
}else{
	console.log(result+" negative numbers found");
}

result = numbers.filter(function(n){
	return n>0;
});

if(result==0){
	console.log("no positive numbers");
}else{
	console.log(result+" positive numbers found");
}

result = numbers.filter(function(n){
	return n%2==0;
});

if(result==0){
	console.log("no even numbers");
}else{
	console.log(result+" even numbers found");
}

result = numbers.filter(function(n){
	return n%2!==0;
});

if(result==0){
	console.log("no odd numbers");
}else{
	console.log(result+" odd numbers found");
}
