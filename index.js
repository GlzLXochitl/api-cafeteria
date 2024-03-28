const express = require("express"); //Importa los módulos necesarios para crear el servidor
const app = express();   //crear el servidor
const port = 3000;  //puerto
const bodyParser = require("body-parser");  //para analizar el cuerpo de las solicitudes HTTP entrantes
//const { Sequelize } = require('sequelize'); // Import the sequelize module