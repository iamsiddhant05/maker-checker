const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    allRoutes = require('./app/routes');

app.use(bodyParser.json());

app.use('/api', allRoutes);

app.listen(3000, () => {
    console.log('Server is up at port 3000.!!');
});