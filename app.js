
const express = require('express');
const morgan = require('morgan');
const routerUser = require('./routes/users.routes');

const app = express();

app.use(morgan('tiny'));
app.use(express.json());
app.use(routerUser);

app.listen(65200, () => {
    console.log('Servidor corriendo en el puerto 65200');
});