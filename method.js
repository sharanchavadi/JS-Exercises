
var numbers = [2,4,3,2,3];
searchNumber = 2;
Array.prototype.count = function(number){
        var result = numbers.filter(function(n){
     	return n==searchNumber;
     });
        return result.length;
}

console.log(numbers.count(2));

