const express = require('express');
const app = express();
const port = 3000
const path = require('path');

app.listen(port, ()=> console.log("Servidor " + port + " corriendo con Express"))

app.use(express.static(path.resolve(__dirname,"public")))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, ".", "views", "home.html"))
});
