const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Servidor funcionando en el puerto 3000');
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});