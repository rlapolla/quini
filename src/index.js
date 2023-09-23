
// nativa de node ->
//      const express = require('express');
//
// ...para poder usar IMPORT/EXPORT es necesario 
// especificar en el package.json ->
//                  "type" : "module"

import express from "express"


// express tiene integración nativa con EJS
// por lo que no es necesario hacer la importación
// 
//  import ejs from "ejs"


import { dirname, join } from "path";
import { fileURLToPath } from "url";


import router from "./routes/index.js";



import conecta from "./db.js";


conecta();

const app = express()

// con toda esta mierda obtengo la RUTA ABSOLUTA de este mismo
// archivo que se está ejecutando ->
//      c:\users\ruben\desktop\nodeapp\src
// ... todo para poder indicar luego que en \VIEWS
//      estarán las vistas para EJS
//
const __dirname = dirname(fileURLToPath(import.meta.url))
// ...pero como se usan distinas barras / \ para indicar 
// carpetas en linux, windows, mac, la mierda misma, 
// hay que usar JOIN que aplica lo que corresponda según corresponda
app.set('views', join(__dirname, 'views'))

app.set('view engine', 'ejs')








/*   INICIAL : ----

app.get('/', (req,res)=>{

    // envío de una resp ante un GET /
    //
    // res.status(200).send("server at 3000")

    //usando el motor de plantillas EJS
    res.status(200).render("index")
})

*/

// este es el  NUEVO ---  en lugar del  INICIAL --- !!!!
app.use(router)


// para que SIRVA contenido ESTÁTICO que estará en: /public
app.use( express.static( join( __dirname, 'public')))


app.listen(3000)

console.log('servidor at 3000')

