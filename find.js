numbers = [2,3,7,1,9,3,4];

searchNumber = 4;

console.log(numbers.includes(2)); //include method

result = numbers.find(function(n){.  //find method. if the number found it returns number else returns undefined.
	return n==searchNumber;
});

if(result == undefined){
   console.log(searchNumber+" not found");
}else{
   console.log(searchNumber+" found");
}


