import express from 'express'
import path from 'path';
import fs from 'fs';

const app = express()

app.use(express.json())

const port = 3000

app.listen(port, () =>{
    console.log("El servidor funciona")
})

app.get('/api/recetas', (req,res)=>{
    // Lee el archivo recetas.json
    fs.readFile(path.join(__dirname, 'data', 'recetas.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error al leer el archivo recetas.json:', err);
            res.status(500).json({ error: 'Error interno del servidor' });
            return;
        }
        // Parsea el contenido del archivo JSON
        const recetas = JSON.parse(data);
        // Envía las recetas como respuesta
        res.json(recetas);
    });
})

app.use(express.static('./client'))