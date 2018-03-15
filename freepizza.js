function Customer(name,orders){
	this.name = name;
	this.orders = orders;
	this.details = function(){
          return this.name+"-"+this.orders;
	}
	this.offers = function(orderCount,amount){
		  var eligibleOrder = [];
          this.orders.forEach(function(order){
          	if(order>=200){
          		eligibleOrder.push(order);

          	}
          })
         
          if(orderCount==eligibleOrder.length && amount==200){
             return "Eligible for free pizza";
          }else{
          	return "Not eligible for free pizza";
          }
	}
}

customerList = [];
var c1 = new Customer("Suresh", [100,250,400,200,350,600]);
var c2 = new Customer("Mahesh", [200,250,300,350,100,300]);
var c3 = new Customer("Rakesh", [100,100,200,300,100,100]);
var c4 = new Customer("Vikas", [200,100,100,100,100,400]);

customerList.push(c1,c2,c3);

var eligiblecustomers = customerList.filter(function(customer){
  	return customer.offers(5,200) == "Eligible for free pizza";
});

//console.log(c1.offers(5,200));
//console.log(c1.offers(5,250));


eligiblecustomers.forEach(function(customer){
  console.log(customer.name);
});



