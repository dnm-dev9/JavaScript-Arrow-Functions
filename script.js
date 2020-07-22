"use strict";


/* Single Argument*/
// Simple function
var sayHello1 = function(name){
  return 'hello ' + name;
};
console.log(sayHello1('naruto'));

// Arrow / Fat Function
let sayHello2 = name => 'hello ' + name;
console.log(sayHello2('dora'));
