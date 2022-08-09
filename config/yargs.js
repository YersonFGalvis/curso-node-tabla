const argv = require('yargs')
                    .option('b' ,{
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        describe: 'Es la base de la tabla de multiplicar'
                    })
                    .option('l',{
                        alias:'listar',
                        type: 'boolean',
                        demandOption: true,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    })
                    .option('h',{
                        alias:'numero max',
                        type: 'number',
                        demandOption: true,
                        default: 10,
                        describe: 'Numero maximo a multiplicar'
                    })
                    .check( (argv, options) =>{
                        if(isNaN( argv.b ) ){
                            throw 'la base debe ser un numero'
                        }
                        return true;
                    }).argv;

module.exports = argv;