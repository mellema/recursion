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
    var arrOut = recursArray(arr, arrayString);
    return "[" + arrOut + "]";
  }
  
  if(typeof obj === 'boolean'){
    return obj.toString();
  }
  // your code goes here
};

var recursArray = function(arr, str){
  
  if(arr.length){
    var s = arr.shift();
    if(typeof s === 'string'){
      str = str + "\"" + s + "\"";
    }
    else{
      str = str + s;
    }
    
  /*console.log('meal before bite:', meal);
  console.log('now eating', meal.pop());
  if(meal.length){
    eat(meal);
  } else {
    console.log('done with the meal!');*/
    recursArray(arr, str);
  }
  
  if(str.length > 0){
    str = str.splice(str.length - 1, 1);
  }
  
  
  return str;
}
