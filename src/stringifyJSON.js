// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  
  if(typeof obj === 'number'){
    return obj.toString();
  }
  
  if(obj === null){
    return 'null';
  }
  
  if(typeof obj === 'string'){
    return "\"" + obj + "\"";
  }
  
  if(Array.isArray(obj)){
    var arrayString = "";
    var arr = obj.slice();
    recursArray(arr);
    return "[" + arrayString + "]";
  }
  
  if(typeof obj === 'boolean'){
    return obj.toString();
  }
  
  function recursArray(arr){
  
	  if(arr.length){
		var s = arr.shift();
		
		if(Array.isArray(s)){
		  var nest = s.slice();
		  stringifyJSON(nest);
		}
	
		if(typeof s === 'string'){
	      arrayString = arrayString + ",\"" + s + "\"";
		}
		else{
		  arrayString = arrayString + "," + s;
	    }
		
		recursArray(arr, true);
	  }
	};
};


