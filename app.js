const express = require('express');
const path = require('path');

const indexRouter = require('./src/routes/indexRouter');
const userRouter = require('./src/routes/userRouter');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

app.use('/', indexRouter);
app.use('/user', userRouter);

let puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto " + puerto);
});