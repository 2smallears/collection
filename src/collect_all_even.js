'use strict';

function collect_all_even(collection) {
    var evenNum = [];
    for(var i = 0; i < collection.length; i++){
        if(collection[i] % 2 === 0){
            evenNum.push(collection[i]);
        }
    }
    return evenNum;

}

module.exports = collect_all_even;
