const express = require('express')
const app = express()

const {config} = require('./config/index')

//rutas
app.get('/', function(req,res){
  res.send('hello world')
})

app.get('/json', function(req,res){
  res.json({hello: 'world'})
})

app.get("/user/:id", function(req, res) {
  res.send("user " + req.params.id);
});

app.get("/year/:year", function(req, res) {
  var yearFind = req.params.year

  var visiesto = yearFind % 4
  if (visiesto == 0) {
    res.send("año viciesto");
  }else {
    res.send("Año normal");        
  }
});
//correr servidor
app.listen(config.port , function(){
  console.log(`Listening on http://localhost:${config.port}`)
})
