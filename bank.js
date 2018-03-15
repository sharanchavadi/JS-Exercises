function Bank(accountNumber,name,balance){
	this.accountNumber=accountNumber;
	this.name=name;
	this.balance=balance;
	this.details = function(){
          return this.accountNumber+"-"+this.name+"-"+this.balance;
	}
	this.transaction = function(amount,code){
     if(code == 0){
       	if(amount>this.balance){
       	  return "insufficient funds";
       	}else{
       	  this.balance = this.balance-amount;
       	  return "you have withdrawn: "+amount+" The remaining balance is"+this.balance;
       	   }
     }else {
       	       this.balance = this.balance+amount;
       	       return "The available balance is"+this.balance;
     }
  }
    
}

var c1 = new Bank("131312","sharan","50000");
var c2 = new Bank("45553","mahesh","20000");
var c3 = new Bank("45435","vinay","10000");

function transaction(customerList,accountNumber,amount,code){
  customer = customerList.find(function(customer){
  	return customer.accountNumber == accountNumber;
  })
  if(customer == undefined){
  	console.log("customer is not found");
  }else{
  	return customer.transaction(amount,code);
  }
}

var customerList = [];
customerList.push(c1,c2,c3);
console.log(customerList);

console.log(c1.details());
//console.log(c1.transaction(2000,0));
//console.log(c1.transaction(4000,1));
//console.log(c1.transaction(100000,0));

console.log(transaction(customerList,"45553",1000,0));

