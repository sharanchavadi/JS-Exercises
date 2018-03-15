var numbers = [1,2,3,4,5,6,7,8,9,0];


console.log("("+numbers.slice(0,3).join("")+") "+numbers.slice(3,6).join("")+"-"+numbers.splice(6,10).join(""));