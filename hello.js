/**
 * Created by Administrateur on 14/12/2016.
 */
const express = require('express');

const server = express();

server.listen(8080, () => {
    console.log("Le serveur écoute sur le port 8080");
});