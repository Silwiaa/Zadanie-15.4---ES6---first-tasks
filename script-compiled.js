'use strict';

// EXC 1
var a = 'Hello',
    b = 'World',
    greeting = a + ' ' + b;

console.log(greeting);

// EXC 2
var multiply = function multiply(a) {
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return a * b;
};

console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// EXC 3 and EXC 4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var average = function average() {
      for (var _len = arguments.length, parameters = Array(_len), _key = 0; _key < _len; _key++) {
            parameters[_key] = arguments[_key];
      }

      return Math.round(parameters / parameters.lenght);
};

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));
console.log(average.apply(undefined, grades));
