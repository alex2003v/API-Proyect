const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
   if (req.method !== 'POST') return next();
   if (req.headers['content-type'] !== 'application/json') return next();
   //solo se ejecuta si es un POST y el content-type es application/json
    //si no se llama a next() la solicitud se queda colgada y no continua el proceso de la solicitud.

    let body = '';

    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        //mutar la request y meter la info en el body
        req.body = data;
        next();
    });
});

app.get('/pokemon/ditto', (req, res) => {
    res.json(ditto)


app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body);


//Ultima USE
app.use((req, res) => {
    res.status(404).send('404 Pagina no encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});