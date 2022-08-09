const fs = require("fs"); //requerimos el manejador de archivos

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    let salida = "";

    if (hasta) {
      for (let index = 1; index <= hasta; index++) {
        salida += `${base} * ${index} = ${base * index}\n`;
      }
    } else {
      for (let index = 1; index <= 10; index++) {
        salida += `${base} * ${index} = ${base * index}\n`;
      }
    }
    if (listar) {
      console.log("===========");
      console.log("TABLA DEL:", base);
      console.log("===========");
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

//exportamos la funcion
module.exports = {
  crearArchivo, // => crearArchivo = crearArchivo
};
