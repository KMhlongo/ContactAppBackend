const express = require('express');
const {sequelize, Contact} = require('./models');
const ContactRoutes = require('./routes/contactRoutes')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('App Running')
});

app.listen({port:3000}, async() => {
    await sequelize.authenticate();
})

app.use('/contact', ContactRoutes);