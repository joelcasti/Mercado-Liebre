const express = require('express');
const app = express();

app.use(express.urlencoded( {extended : false} ));
app.use(express.json());
app.use(express.static('public'));
app.set('view engine', 'ejs');

const indexRouter = require('./src/routes/indexRouter');
const userRouter = require('./src/routes/userRouter');
app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en marcha");
});