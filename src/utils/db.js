const mongoose = require ('mongoose');

// indico la cadena de conexion a la BBDD.
const DB_URL = process.env.DB_URL;

//creo la funcion de conexion a BBDD
const connect = async () => {
 try {
    const db = await mongoose.connect(DB_URL);
    const {name, host} = db.connection;

    console.log(`conectados a ${name} BD en el servidor ${host}`);
 } catch (error) {
    console.log('Error al conectarnos a BBDD: ', error);
 }
}

//exporto la funcion
module.exports = {connect}