"use strict";

// Part 1 - Single or No Argument

/* Single Argument*/
// Simple function
var sayHello1 = function(name){
  return 'hello ' + name;
};
console.log(sayHello1('naruto'));

// Arrow / Fat Function
let sayHello2 = name => 'hello ' + name;
console.log(sayHello2('dora'));

// Part 2

let divideby2 = a => a/2;
console.log(divideby2(6));

// Preferred Syntax
let divideby3 = (a) => { return a/3 };
console.log(divideby3(6));

// Part 3

var pia = 3.14;
let returnpia = () => { return pia };
console.log(returnpia());

// or

var pib = 3.14;
let returnpib = _ => { return pib };
console.log(returnpib());

// Part 4 - Two Arguments

let greetperson = (greeting, name) => { return greeting+' '+name };
console.log(greetperson('bonjour','max'));

// Part 5 - N or more than 2 arguments

var displaynames = (...n) => {
  // console.log("Name 1 is : "+ n[0])
  // console.log("Name 2 is : "+ n[1])
  // console.log("Name 3 is : "+ n[2])
  n.forEach((item, i) => {
      console.log('Name at index '+i+' is '+item)
  });

}
displaynames('name1','name2','name3');
