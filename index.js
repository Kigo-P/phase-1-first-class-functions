function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    return function named(){}
    
}

const returnsAnAnonymousFunction = function(){
    return function (){}
}