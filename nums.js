/* 10 numbers are entered from the keyboard into an array. The number to be searched is entered through the keyboard by the user.  Write a program to find if the number to be searched is present and if it is present display the number of times it appears in the array */

var numbers = [2,40,5,10,5,2,8,1,6,4];

searchNum = 5;

i = 0;

while(i<10){
 
    if(number[i] == searchNum){
      console.log("found");
      count +=1;
    }else{
    	console.log("not found");
    }


    i+=1;
};

console.log("the found"+count+"times");
