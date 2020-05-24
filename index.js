//Importar libreria express
const express = require('express');
//Generamos un objeto
const app = express();
//Especificar direcgtorio
app.use(express.static(__dirname + '/public'));
//Arrancar servidor
app.listen(3000, ()=>{
    console.log('Escuchando el puerto tcp  3000')
});