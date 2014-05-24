// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

  var jsonStr = "";
  
  if(typeof obj === 'number'){
    jsonStr = jsonStr + obj.toString();
  }
  
  if(obj === null){
    jsonStr = jsonStr + 'null';
  }
  
  if(typeof obj === 'boolean'){
    jsonStr = jsonStr + obj.toString();
  }
  
  
  if(typeof obj === 'string'){
    jsonStr = jsonStr + "\"" + obj + "\"";
  }
  
  
  if(Array.isArray(obj)){
    var arrayString = "";
    var arr = obj.slice();
    
    jsonStr = jsonStr + "[";
    
    if(arr.length > 0){
      for(var a = 0; a < arr.length; a++){
        jsonStr = jsonStr + stringifyJSON(arr[a]) + ",";
      }
      jsonStr = jsonStr.slice(0, jsonStr.length - 1);
    }
    jsonStr = jsonStr + "]";
  }
  
  if(!(Array.isArray(obj)) && typeof obj === 'object' && obj){
    jsonStr = jsonStr + "{";
    
    for(var item in obj){
      if(typeof obj[item] === 'function' || typeof obj[item] === 'undefined'){
      var u = 2;
      }
      else if(obj[item] && typeof obj[item] === 'object'){
        jsonStr = jsonStr + "\"" + item + "\":" + stringifyJSON(obj[item]) + ",";
      }
      else if(obj[item] && typeof obj[item] !== 'boolean'){
        jsonStr =  jsonStr + "\"" + item + "\":\"" + obj[item] + "\",";
      }
      else{
        jsonStr =  jsonStr + "\"" + item + "\":" + obj[item] + ",";
      }  
    }
    
    jsonStr = jsonStr + "}";
    
    if(jsonStr.charAt(jsonStr.length - 1) === "}" && jsonStr.charAt(jsonStr.length - 2) === ","){
      jsonStr = jsonStr.slice(0, jsonStr.length - 2) + jsonStr.slice(jsonStr.length - 1);
    }
    
    /*if(jsonStr.charAt(jsonStr.length - 1) === "{"){
      jsonStr = jsonStr + "},";
    }
    if(jsonStr.charAt(jsonStr.length - 1) === ","){
      jsonStr = jsonStr.slice(0, jsonStr.length - 1) + "}";
    }/*
    else{  
      jsonStr = jsonStr.slice(0, jsonStr.length) + "}";
    }  
    else{
      jsonStr = jsonStr + "}";
    }*/
  }
  /*if(jsonStr.charAt(jsonStr.length - 1) === ","){
    jsonStr = jsonStr.slice(0, jsonStr.length - 1)
  }*/
  
  
  return jsonStr;
};


