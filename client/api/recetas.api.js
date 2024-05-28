const express = require('express')
const app = express()

const path = require('path')

//definimos la ruta

const dataPath = path.join(__dirname, 'data')

app.get('/api/recetas', (req,res)=>{
    res.sendFile(path.join(dataPath, 'recetas.json'))
})