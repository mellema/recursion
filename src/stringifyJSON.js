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
    return "[" + arrayString.slice(1) + "]";
  }
  
  if(!(Array.isArray(obj)) && typeof obj === 'object'){
    var a = Object.keys(obj);
    if(a.length < 1){
      return "{}";
    }
  }
  
  if(typeof obj === 'boolean'){
    return obj.toString();
  }
  
  function recursArray(arr){
  
	  if(arr.length){
		var s = arr.shift();
		
		if(Array.isArray(s)){
		  var nest = s.slice();
		  s = stringifyJSON(nest);
		}
	
		if(typeof s === 'string'){
		  if(s.charAt(0) !== '['){
	        arrayString = arrayString + ",\"" + s + "\"";
	      }
	      else{
	        arrayString = arrayString + "," + s;
	      }
		}
		else{
		  arrayString = arrayString + "," + s;
	    }
		
		recursArray(arr, true);
	  }
	};
	
	function recursObject(o){
	
	};
};


