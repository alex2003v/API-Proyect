const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
    console.log(`mi primer middleware`);
    //si no se llama a next() la solicitud se queda colgada y no continua el proceso de la solicitud.
    next();
});

app.get('/POKEMON/Ditto', (req, res) => {
    res.json(Ditto.JSON);
});

app.post('/POKEMON', (req, res) => {
    let body = '';
    req.on('data', (chunk) => {
        body += chunk.toString();
    });

    req.on('end', () => {
        const data = JSON.parse(body);
        data.timestamp = Date.now();
        res.status(201).json(data);
    });
});

//Ultima USE
app.use((req, res) => {
    res.status(404).send('404 Pagina no encontrada');
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
