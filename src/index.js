/*var numeros = [400,200,1,-23];


// FUNCIÓN COMÚN EN JAVASCRIPT 
// var numerosMasUno =  numeros.map(function(numero) {
//     return numero + 1;
// });


// MISMA FUNCIÓN CON SINTAXIS DE ECMA SCRIPT
var numerosMasUno =  numeros.map(n => n + 1);


console.log(numerosMasUno);

*/

// var page = require('page');
// var yo = require('yo-yo');
// var empty = require('empty-element');

import page from 'page';
require('./homepage');
require('./signup');
require('./signin');

page();