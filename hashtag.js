var sentence = "we love india"

var words = sentence.split(" ");
var output = "#";
/* one way of doing it

for(i=0; i<words.length; i++){
  var word = words[i];
  word = word[0].toUpperCase() + word.substr(1,word.length); //code to capitalize a word
  output +=word;
}
console.log(output);
*/

 
//other way by iterator

words.forEach(function(word){
	word = word[0].toUpperCase() + word.substr(1,word.length);
	output +=word;
});

console.log(output);