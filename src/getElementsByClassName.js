// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  var arr = [];
  var $body = $(document.body);
  //var $kids = ($body).children();

  
  $($body).each(function(index, element){
    if(element.classList.contains(className)){
      arr.push(element);
    }
    if(element.childNodes){
      var check = "yes";
    }
    //arr = arr.concat(getElementsByClassName(className));
  });
  
  return arr;
};
