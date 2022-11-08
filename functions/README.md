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







