/**
 * Created by Administrateur on 14/12/2016.
 */
const express = require('express');

const server = express();

server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

server.get('/', (req, res, next) => {
    res.send('<h2>Acceuil</h2>');
});

server.get('/contacts', (req, res, next) => {
    res.send('<h2>Liste des contacts</h2>');
});

server.get('/contacts/:id', (req, res, next) => {
    var id = parseInt(req.params.id);

    if(isNaN(id)){
        return next();
    }

    res.send('<h2>Liste des contacts'+`${req.params.id}`+'</h2>');
});

server.use((req, res, next) => {
    res.statusCode = 404;
    res.send('<h2>Not found</h2>');
});


server.listen(8080, () => {
    console.log("Le serveur écoute sur le port 8080");
});