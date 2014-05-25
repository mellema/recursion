// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  
  var arr = [];
  
  var $body = $(document.body);
  
  $($body).each(function(index, element){
    if(element.classList.contains(className)){
      arr.push(element);
    }
    if(element.hasChildNodes()){
      var $element = $(element.childNodes);
      $($element).each(function(ind, elem){
      
        if(elem.classList && elem.classList.contains(className)){
          arr.push(elem);
        }
        if(elem.hasChildNodes()){
          getElemsByCName(className, arr, elem);
        }  
      });
    }
  });
  
  function getElemsByCName(cName, array1, el){
    if(el.classList.contains(cName)){
      array1.push(el);
    }
    if(el.hasChildNodes()){
      var $el = $(el.childNodes);
      $($el).each(function(i, e){
        if(e.hasChildNodes()){
          getElemsByCName(cName, array1, e);
        }
      });
    }
  }
  
  
  
  return arr;
};
