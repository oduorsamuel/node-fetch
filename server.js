const express = require('express')
const bodyParser = require("body-parser");
const cors=require('cors');
const app = express()
const port = 3000

const routes = require('./routes/router')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use('/v1/courses', routes );
app.use(routes)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))