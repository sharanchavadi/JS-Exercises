numbers = [2,3,4,1,9,3,4];

searchNumber = 4;

result = numbers.filter(function(n){  //filter method. if the number found it returns an array of numbers else returns empty array.
	return n==searchNumber;
});

if(result == 0){
   console.log(searchNumber+" not found");
}else{
   console.log(searchNumber+" found"+result.length+"times");
}