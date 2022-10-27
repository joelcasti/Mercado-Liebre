const express = require('express');
const app = express();

app.use(express.urlencoded( {extended : false} ));
app.use(express.json());
app.use(express.static('public'));
const methodOverride = require("method-override");
app.use(methodOverride ("_method"));
app.set('view engine', 'ejs');

// Rutas principales
const indexRoutes = require('./src/routes/indexRoutes');
const userRoutes = require('./src/routes/userRoutes');
app.use('/', indexRoutes);
app.use('/user', userRoutes);

//Rutas hacia las API's
const productsApiRoutes = require('./src/routes/api/productsApiRoutes');
const categoryApiRoutes = require('./src/routes/api/categoryApiRoutes');
const offerApiRoutes = require('./src/routes/api/offerApiRoutes');
app.use('/api/products', productsApiRoutes);
app.use('/api/category', categoryApiRoutes);
app.use('/api/offer', offerApiRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor corriendo en marcha");
});