var names = ["sheldon", "leonard", "penny", "rajesh", "howard"];

var result;

var r=6;

i=0;

while(i<r){
	
    result = names.shift();
    names.push(result,result);

i+=1;
};

console.log(names[0]);



