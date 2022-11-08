// a callback function 

function callbackFunction() {
    console.log('This is a callback function');
}

// a function that takes a callback function as an argument

function higherOrderFunction(callback) {
    callback();
}

// returning a function from another function

function higherOrderFunction() {
    return function() {
        console.log('I am a function returned from another function');
    }
}

// storing a function in a variable

function helloWorld() {
    console.log('Hello World');
}

var helloWorld = function() {
    console.log('Hello World');
}

helloWorld();


