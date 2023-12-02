const express = require("express")
const morgan = require("morgan")
const indexRouter= require('./routers/indexRouter')
const cors = require('cors');
const app = express();

app.use(morgan("dev"));
app.use(express.json()); // reconocer estructura json
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  
  // las rutas principales a utilizar
  app.use(indexRouter);

module.exports = app;