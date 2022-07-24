#!/usr/bin/env node
const dragon_curve = require('./index.js');

const printUsage = function() {
    console.log('\nUsage:\n' + '  $ dragon-curve-cli <n>\n');
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    if (params[0] && !isNaN(params[0]) && parseInt(params[0]) >= 0) {
        var n = parseInt(params[0]);
        if (n !== undefined) {
            console.log(dragon_curve.create(n));
        }
    } else {
        console.log('\n<n> should be a number greater than or equal to 0');
        printUsage();
    }
} else {
    printUsage();
}