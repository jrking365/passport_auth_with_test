const express = require('express');
const indexRoute = require('./routes/index').rootRoute;
//setting the app




const app = express();


//routes
app.use('/', indexRoute);
//setting the port 
const PORT = process.env.port || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));