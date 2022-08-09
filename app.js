const { crearArchivo } = require('./helpers/multiplicar'); //requerimos la funcion desestructurando el objeto en el que viene
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

// console.log( process.argv );
// console.log( argv );

// console.log('base: yargs', argv.base);

// const base = 3;

crearArchivo(argv.b,argv.l,argv.h)
.then( nombreArchivo => console.log(nombreArchivo.rainbow , 'creado correctamente') )
.catch(err => console.log(err));
