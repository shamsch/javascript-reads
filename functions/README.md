## Functions in Javascript 

Functions in javascript are essentially first class objects. This means that they can be passed around as arguments to other functions, returned by other functions, and assigned to variables just like any other value.

- Callbacks are functions that are passed as arguments to other functions. They are executed after the parent function has finished executing.

```javascript

function callMyName(name, callback) {
    var myAge = 20;
    callback(myAge);
    console.log('Is it interesting? Yes it is Mr.' + name);
}
    
function hello(age) {
    console.log('I am passed through argument and my age is: ' + age);
}

callMyName('Remon', hello);
````


- Higher order functions are functions that take other functions as arguments or return functions as their return value. Examples: map, filter, reduce, forEach, sort, etc.

```javascript
var arr = [1, 2, 3, 4, 5];

var newArr = arr.map(function (item) {
    return item * 2;
});

console.log(newArr);
```

- Returning functions from other functions

```javascript
function welcomeMsg(name) {
    console.log('Welcome Mr. ' + name);
    return function options(menu) {
        console.log('Do you like ' + menu + ' Mr. ' + name);
    }
}

welcomeMsg('Remon')('Coffee');
```
- Stored in variables

```javascript
var aFunc = function(name) {
    console.log('I am Simply a function and my name is ' + name);
}

var anothervar = aFunc;

anothervar('Remon');
```

## Map, Filter, Reduce

- Map is a higher order function that can be applied on an array with a callback function as argument. It returns a new array with the results of calling the callback function on each element of the array. Usually used to traverse an array and perform some operation on each element.

```javascript
var arr = [1, 2, 3, 4, 5];

var newArr = arr.map(function (item) {
    return item * 2;
});

console.log(newArr);
```

- Filter is similar to map. It returns a new array with the elements that return true when passed to the callback function. Usually used to filter an array based on some condition.

```javascript
var arr = [1, 2, 3, 4, 5];

var newArr = arr.filter(function (item) {
    return item % 2 === 0;
});

console.log(newArr);
```

- Reduce is a higher order function that takes a callback function as argument. It returns a single value after performing some operation on each element of the array. It takes two arguments, the first one is the callback and the second one is an initial value. The initial value is optional and if not provided, the first element of the array is used as the initial value. Then, the callback function first argument is the initial value and the second argument is the current element of the array. The return value of the callback function is used as the initial value for the next iteration as it traverses the array.

```javascript
var arr = [1, 2, 3, 4, 5];

var sum = arr.reduce(function (prev, curr) {
    return prev + curr;
}, 0);

//average 

var avg = arr.reduce(function (prev, curr) {
    return prev + curr;
}, 0) / arr.length;

console.log(sum);
console.log(avg);
```

FYI, You can pass a second arugment in `map()` and `filter()` as well. It can be used to set the `this` value of the callback function.

```javascript
var arr = [1, 2, 3, 4, 5];

var newArr = arr.map(function (item) {
    return item * this.multiplier;
}, {multiplier: 2});

console.log(newArr);
```
Only works with functions created using function expression. Arrow functions do not have their own `this` value. They inherit the `this` value of the enclosing context.



## What is hoisting? 

JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

```javascript

console.log(a); // undefined

var a = 10;

console.log(a); // 10

b(); // I am a function

function b() {
    console.log('I am a function');
}


```
## What is closure?

A closure is a function that has access to the parent scope, even after the parent function has closed.

```javascript

function a() {
    var x = 10;
    return function b() {
        console.log(x);
    }
}

var c = a();

a(); // function b() { console.log(x); }
c(); // 10

```

## IIFE

IIFE stands for Immediately Invoked Function Expression. It is a function that is executed as soon as it is defined. It is used to create a new scope and avoid polluting the global scope.

```javascript

(function () {
    var x = 10;
    console.log(x);
})();

console.log(x); // ReferenceError: x is not defined

```




