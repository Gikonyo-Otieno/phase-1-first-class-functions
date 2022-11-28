function receivesAFunction (cb) {
     cb()
}
receivesAFunction(function (){return "This is the Callback"});

function returnsANamedFunction () {
    return function cb(name, weight) {
        return `I'm ${name} and I weigh ${weight}kgs.`
    }
}

function returnsAnAnonymousFunction () {
    return function (){
        return "Hello World";
    }
}