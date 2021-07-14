'use strict';
const lib = require('./lib');

// test 1
let testData = ['AMOR', 'XISELA', 'JAMON', 'ROMA', 'OMAR', 'MORA', 'ESPONJA', 'RAMO', 'JAPONES', 'ARMO', 'MOJAN', 'MARO', 'ORAM', 'MONJA', 'ALEXIS'];
const orderedWords = lib.groupWords(testData);

for (const key in orderedWords) {
    console.log(orderedWords[key].join(' - '))
}
console.log('-------------------')


// test 2
console.log(lib.removeParentheses('foo(foo(bar))blim'));
console.log('-------------------')


