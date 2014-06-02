// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here

  var nodes = [];

  var checkNodes = function(nod){

    if(nod.classList){
      for(var i = 0; i < nod.classList.length; i++){

        if(nod.classList[i] === className) {
          nodes.push(nod);
        }

        if (nod.childNodes.length) {
          for (var j = 0; j < nod.childNodes.length; j += 1) {
            checkNodes(nod.childNodes[j]);
          }
        }
      }
    }
  };

  checkNodes(document.body);




  return nodes;
};
