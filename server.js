const express = require('express');
const app = express();

const hbs= require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use( express.static(__dirname + '/public'));

//Express hbs engine
hbs.registerPartials( __dirname + "/views/parciales" )

app.set('view engine', 'hbs');

 
app.get('/',  (req, res) => {
    // // res.writeHead(200, {'Content-Type': 'application/json'});
    // let salida = {
    //     nombre: 'Cesar',
    //     apellido: 'Kemper',
    //     edad: 24,
    //     url: req.url
    // }
  // res.send(salida)
  res.render('home',{
    nombre: 'Cesar',
    anio: new Date().getFullYear()
  });
})
app.get('/about', (req,res) => {
  res.render('about',{
    nombre: 'Cesar',
    anio: new Date().getFullYear()
  });
});

 
app.listen(port, () =>
console.log(`Escuchando peticiones en el puerto ${port}`));