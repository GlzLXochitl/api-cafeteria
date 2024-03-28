const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("...", "root", "", {   //CONECCION A LA BACE DE DATOS
    host: "localhost", //
    dialect: "mariadb" //
});

(async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  })();

const db = {};

db.sequelize = sequelize;  //acceso a la libreria
db.sequelize = Sequelize;  //acceso a la instancia

db.books= require('./models/book.model.js')(sequelize, Sequelize);  //modelo de usuarios

module.exports = db;