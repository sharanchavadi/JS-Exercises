var response = {
   "destination_addresses" : [ "Mysuru, Karnataka, India" ],
   "origin_addresses" : [ "Bengaluru, Karnataka, India" ],
   "rows" : [
      {
         "elements" : [
            {
               "distance" : {
                  "text" : "150 km",
                  "value" : 149993
               },
               "duration" : {
                  "text" : "3 hours 5 mins",
                  "value" : 11104
               },
               "status" : "OK"
            }
         ]
      }
   ],
   "status" : "OK"
}


var destination = response.destination_addresses[0].split(", ")[0];
var origin = response["origin_addresses"][0].split(", ")[0];

var distance = response.rows[0].elements[0].distance.text;
var duration = response.rows[0].elements[0].duration.text;

console.log("the distance between "+origin+" and "+destination+" is "+distance+" & it takes "+duration+" to travel");
