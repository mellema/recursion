// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  var jsonString;
  var i;

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    jsonString = '';
    for(i = 0; i < obj.length; i++){
      if (i === obj.length - 1) {
        jsonString += stringifyJSON(obj[i]);
      } else {
        jsonString += stringifyJSON(obj[i]) + ',';
      }
    }
    return '[' + jsonString + ']';
  } else if (typeof obj === 'object') {
    jsonString = '';
    for(var item in obj){
      if(typeof obj[item] === 'function' || typeof obj[item] === 'undefined'){
        return '{}';
      }else{
        jsonString += '"' + item + '":' + stringifyJSON(obj[item]) + ',';
      }
    }
    return '{' + jsonString.slice(0, jsonString.length - 1) + '}';
  }
};


