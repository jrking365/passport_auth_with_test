const express = require('express');

//setting the app

const app = express();



//setting the port 
const PORT = process.env.port || 3000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));